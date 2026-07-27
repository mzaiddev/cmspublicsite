import { n as cn } from "./button-DRsC1qZi.js";
import * as React from "react";
import { jsx } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Check } from "lucide-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
var ICON_MAP = {
	contractor: "HardHat",
	vendor: "Building2",
	workflow: "Workflow",
	forms: "FormInput",
	workorders: "ClipboardList",
	accounts: "Users",
	messaging: "MessageSquare",
	agreements: "FileSignature",
	invoices: "FileText",
	payments: "CreditCard",
	reports: "BarChart3",
	analytics: "LineChart",
	teams: "UsersRound",
	email: "Mail",
	support: "LifeBuoy",
	calendar: "Calendar",
	portfolio: "Briefcase",
	bank: "Landmark",
	tax: "Receipt",
	api: "Code2",
	whitelabel: "Palette",
	branding: "Brush",
	sso: "KeyRound",
	audit: "ShieldCheck",
	perms: "Lock"
};
var PLAN_META = {
	starter: { tagline: "For small teams getting organized." },
	professional: { tagline: "Growing contractor operations." },
	business: { tagline: "Multi-team businesses at scale." },
	enterprise: { tagline: "Custom, SSO, dedicated infra." }
};
var INDUSTRIES = [
	{
		name: "Construction",
		icon: "HardHat"
	},
	{
		name: "Maintenance",
		icon: "Wrench"
	},
	{
		name: "Repair",
		icon: "Hammer"
	},
	{
		name: "Electrical",
		icon: "Zap"
	},
	{
		name: "HVAC",
		icon: "Fan"
	},
	{
		name: "Cleaning",
		icon: "Sparkles"
	},
	{
		name: "Logistics",
		icon: "Truck"
	},
	{
		name: "Manufacturing",
		icon: "Factory"
	},
	{
		name: "Healthcare",
		icon: "Stethoscope"
	},
	{
		name: "Field Service",
		icon: "Radio"
	},
	{
		name: "Security",
		icon: "Shield"
	},
	{
		name: "Real Estate",
		icon: "Home"
	}
];
var TAX_RATE = .08;
var ANNUAL_DISCOUNT = .2;
//#endregion
//#region src/lib/api.ts
var CMS_API_URL = "/api";
async function request(path, init) {
	const res = await fetch(`${CMS_API_URL}${path}`, {
		...init,
		headers: {
			"Content-Type": "application/json",
			...init?.headers ?? {}
		}
	});
	const body = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(body.message || `Request failed (${res.status})`);
	return body;
}
function fetchPricing() {
	return request("/public/pricing");
}
/**
* Creates a Stripe customer + subscription for the chosen plan/add-ons and
* stashes the signup details server-side. Nothing is provisioned yet.
*/
function startCheckout(payload) {
	return request("/public/checkout/start", {
		method: "POST",
		body: JSON.stringify(payload)
	});
}
/**
* Call once Stripe confirms the payment (or immediately, if there was
* nothing to charge) — verifies the subscription is actually active and
* only then provisions the tenant.
*/
function finalizeCheckout(pendingSignupId) {
	return request("/public/checkout/finalize", {
		method: "POST",
		body: JSON.stringify({ pendingSignupId })
	});
}
//#endregion
//#region src/hooks/use-pricing.ts
/**
* Live plan/module catalog from the CMS, reshaped for the landing page UI.
* Icons and taglines aren't stored in the CMS, so they're merged in from
* static presentation metadata keyed by moduleId / plan name.
*/
function usePricing() {
	const query = useQuery({
		queryKey: ["public-pricing"],
		queryFn: fetchPricing,
		staleTime: 6e4
	});
	const modules = (query.data?.modules ?? []).filter((m) => !m.isCore).map((m) => ({
		id: m.moduleId,
		name: m.name,
		description: m.description ?? "",
		price: m.price,
		category: m.category,
		icon: ICON_MAP[m.moduleId] ?? "Sparkles",
		isCore: m.isCore
	}));
	const coreModuleNames = (query.data?.modules ?? []).filter((m) => m.isCore).map((m) => m.name);
	const allModuleIds = modules.map((m) => m.id);
	const plans = (query.data?.plans ?? []).map((p) => ({
		id: p._id,
		name: p.name,
		monthly: p.monthlyPrice,
		yearly: p.yearlyPrice,
		tagline: p.description || PLAN_META[p.name.toLowerCase()]?.tagline || "",
		highlight: p.isPopular,
		includedModules: p.defaultModules,
		addonModules: p.availableAddonModules,
		features: p.features
	}));
	const isAllInclusive = (plan) => allModuleIds.length > 0 && allModuleIds.every((id) => plan.includedModules.includes(id));
	return {
		...query,
		plans,
		modules,
		coreModuleNames,
		isAllInclusive
	};
}
//#endregion
//#region src/components/ui/checkbox.tsx
var Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(CheckboxPrimitive.Root, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
//#endregion
export { ANNUAL_DISCOUNT as a, startCheckout as i, usePricing as n, INDUSTRIES as o, finalizeCheckout as r, TAX_RATE as s, Checkbox as t };
