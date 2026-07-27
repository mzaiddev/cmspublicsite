const CMS_API_URL = import.meta.env.VITE_CMS_API_URL || "http://localhost:5001/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${CMS_API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(body.message || `Request failed (${res.status})`);
  }
  return body as T;
}

export type ModuleCategory =
  | "Core"
  | "Operations"
  | "Finance"
  | "Communication"
  | "Growth"
  | "Platform";

export interface ApiModule {
  _id: string;
  moduleId: string;
  name: string;
  description?: string;
  price: number;
  category: ModuleCategory;
  isCore: boolean;
}

export interface ApiPlan {
  _id: string;
  name: string;
  description?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  maxUsers: number;
  storageGB: number;
  defaultModules: string[];
  availableAddonModules: string[];
  isPopular: boolean;
}

export function fetchPricing() {
  return request<{ plans: ApiPlan[]; modules: ApiModule[] }>("/public/pricing");
}

export function validateCoupon(code: string, planId?: string) {
  return request<{
    valid: boolean;
    coupon: { code: string; type: "percentage" | "fixed"; discount: number };
  }>("/coupons/validate", {
    method: "POST",
    body: JSON.stringify({ code, planId }),
  });
}

export interface StartCheckoutPayload {
  companyName: string;
  ownerName: string;
  ownerEmail: string;
  ownerPassword: string;
  phone?: string;
  planId: string;
  billingCycle: "monthly" | "yearly";
  addonModuleIds: string[];
  couponCode?: string;
}

export interface StartCheckoutResponse {
  pendingSignupId: string;
  // Present when there's an amount due — pass to Stripe Elements to collect
  // payment. Absent when the subscription needed nothing to charge (e.g. a
  // 100%-off coupon) — finalize can be called right away.
  clientSecret: string | null;
  status: string;
}

/**
 * Creates a Stripe customer + subscription for the chosen plan/add-ons and
 * stashes the signup details server-side. Nothing is provisioned yet.
 */
export function startCheckout(payload: StartCheckoutPayload) {
  return request<StartCheckoutResponse>("/public/checkout/start", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export interface FinalizeCheckoutResponse {
  message: string;
  client: {
    companyName: string;
    email: string;
    subdomain: string;
    status: string;
    plan: string;
  };
}

/**
 * Call once Stripe confirms the payment (or immediately, if there was
 * nothing to charge) — verifies the subscription is actually active and
 * only then provisions the tenant.
 */
export function finalizeCheckout(pendingSignupId: string) {
  return request<FinalizeCheckoutResponse>("/public/checkout/finalize", {
    method: "POST",
    body: JSON.stringify({ pendingSignupId }),
  });
}
