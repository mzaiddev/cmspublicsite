import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Building2,
  UserRound,
  Receipt,
  ShieldCheck,
  CreditCard,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ANNUAL_DISCOUNT, TAX_RATE } from "@/lib/pricing-data";
import { usePricing } from "@/hooks/use-pricing";
import { startCheckout, finalizeCheckout, type FinalizeCheckoutResponse } from "@/lib/api";

const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise =
  typeof window !== "undefined" && STRIPE_PUBLISHABLE_KEY
    ? loadStripe(STRIPE_PUBLISHABLE_KEY)
    : null;

const PENDING_SIGNUP_STORAGE_KEY = "contractly_pending_signup_id";

const searchSchema = z.object({
  plan: z.string().default(""),
  billing: z.enum(["monthly", "yearly"]).default("yearly"),
  modules: z.string().default(""),
});

export const Route = createFileRoute("/register")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Create your workspace — Contractly" },
      { name: "description", content: "Set up your Contractly workspace in minutes. Company details, plan, modules, and secure payment." },
      { property: "og:title", content: "Create your workspace — Contractly" },
      { property: "og:description", content: "Multi-step signup for your Contractly workspace." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/register" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: RegisterPage,
});

const currency = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const STEPS = [
  { key: "company", title: "Company", icon: Building2 },
  { key: "owner", title: "Owner", icon: UserRound },
  { key: "summary", title: "Summary", icon: Receipt },
  { key: "review", title: "Review", icon: ShieldCheck },
  { key: "payment", title: "Payment", icon: CreditCard },
] as const;

function RegisterPage() {
  const { plan, billing, modules } = Route.useSearch();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const { plans, modules: allModules, isAllInclusive, isLoading: pricingLoading } = usePricing();

  const [company, setCompany] = useState({
    name: "", type: "LLC", industry: "Construction", website: "", country: "United States",
    city: "", address: "", phone: "", email: "", timezone: "America/New_York",
  });
  const [owner, setOwner] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "",
  });
  const [couponCode, setCouponCode] = useState("");
  const [terms, setTerms] = useState(false);

  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [pendingSignupId, setPendingSignupId] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [resumingRedirect, setResumingRedirect] = useState(false);

  const selectedPlan = plans.find((p) => p.id === plan) ?? plans[0];
  const selectedModuleIds = modules ? modules.split(",").filter(Boolean) : [];
  const yearly = billing === "yearly";

  const summary = useMemo(() => {
    if (!selectedPlan) {
      return { addons: [], addonMonthly: 0, baseMonthly: 0, subMonthly: 0, monthlyBilled: 0, preTax: 0, tax: 0, total: 0 };
    }
    const allInclusive = isAllInclusive(selectedPlan);
    const addons = allModules.filter(
      (m) =>
        selectedModuleIds.includes(m.id) &&
        !allInclusive &&
        !selectedPlan.includedModules.includes(m.id),
    );
    const addonMonthly = addons.reduce((s, m) => s + m.price, 0);
    const subMonthly = selectedPlan.monthly + addonMonthly;
    const monthlyBilled = yearly ? subMonthly * (1 - ANNUAL_DISCOUNT) : subMonthly;
    const preTax = yearly ? monthlyBilled * 12 : monthlyBilled;
    const tax = preTax * TAX_RATE;
    return { addons, addonMonthly, baseMonthly: selectedPlan.monthly, subMonthly, monthlyBilled, preTax, tax, total: preTax + tax };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan, allModules, selectedModuleIds, yearly]);

  const goToSuccess = (result: FinalizeCheckoutResponse) => {
    sessionStorage.removeItem(PENDING_SIGNUP_STORAGE_KEY);
    navigate({
      to: "/success",
      search: { plan: result.client.plan, subdomain: result.client.subdomain } as never,
    });
  };

  // If Stripe redirected back here after an off-session authentication step
  // (e.g. 3D Secure), finish the signup using the pendingSignupId we stashed
  // before leaving — none of the in-memory wizard state survives a redirect.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectStatus = params.get("redirect_status");
    const storedId = sessionStorage.getItem(PENDING_SIGNUP_STORAGE_KEY);
    if (!redirectStatus || !storedId) return;

    setResumingRedirect(true);
    if (redirectStatus === "succeeded") {
      finalizeCheckout(storedId)
        .then(goToSuccess)
        .catch((err) => {
          sessionStorage.removeItem(PENDING_SIGNUP_STORAGE_KEY);
          setSubmitError(err instanceof Error ? err.message : "We couldn't finish setting up your workspace.");
          setResumingRedirect(false);
        });
    } else {
      sessionStorage.removeItem(PENDING_SIGNUP_STORAGE_KEY);
      setSubmitError("Payment wasn't completed. Please try again.");
      setResumingRedirect(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goNext = async () => {
    if (step === STEPS.length - 2 && !pendingSignupId) {
      // Leaving Review, entering Payment — start the Stripe checkout session.
      setCheckoutLoading(true);
      setSubmitError(null);
      try {
        const result = await startCheckout({
          companyName: company.name,
          ownerName: `${owner.firstName} ${owner.lastName}`.trim(),
          ownerEmail: owner.email,
          ownerPassword: owner.password,
          phone: owner.phone || company.phone,
          planId: selectedPlan!.id,
          billingCycle: yearly ? "yearly" : "monthly",
          addonModuleIds: summary.addons.map((m) => m.id),
          couponCode: couponCode || undefined,
        });
        setPendingSignupId(result.pendingSignupId);
        setClientSecret(result.clientSecret);
      } catch (err) {
        setSubmitError(err instanceof Error ? err.message : "Couldn't start checkout. Please try again.");
        setCheckoutLoading(false);
        return;
      }
      setCheckoutLoading(false);
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const canProceed = () => {
    if (step === 0) return company.name && company.email && company.country;
    if (step === 1) return owner.firstName && owner.email && owner.password && owner.password === owner.confirm;
    if (step === 3) return terms;
    return true;
  };

  if (pricingLoading || !selectedPlan || resumingRedirect) {
    return (
      <div className="grid min-h-screen place-items-center bg-hero">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const isLastStep = step === STEPS.length - 1;

  return (
    <div className="min-h-screen bg-hero">
      <header className="border-b glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-primary-foreground shadow-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-base font-bold">Contractly</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            Already have an account? <a href="#" className="font-medium text-foreground hover:underline">Log in</a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        {/* Stepper */}
        <div className="mb-10">
          <div className="flex items-center justify-between gap-2 overflow-x-auto">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const done = i < step;
              const active = i === step;
              return (
                <div key={s.key} className="flex flex-1 items-center gap-3">
                  <div className={cn(
                    "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                    active && "border-primary bg-primary/10 text-primary",
                    done && "border-success bg-success/10 text-success",
                    !active && !done && "text-muted-foreground",
                  )}>
                    <span className={cn(
                      "grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold",
                      active && "bg-primary text-primary-foreground",
                      done && "bg-success text-primary-foreground",
                      !active && !done && "bg-muted",
                    )}>
                      {done ? <Check className="h-3 w-3" /> : i + 1}
                    </span>
                    <Icon className="hidden h-3.5 w-3.5 sm:block" />
                    <span className="hidden sm:inline">{s.title}</span>
                  </div>
                  {i < STEPS.length - 1 && <div className={cn("h-px flex-1", done ? "bg-success" : "bg-border")} />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border bg-card p-6 shadow-card sm:p-8">
            {step === 0 && (
              <StepShell title="Tell us about your company" desc="This becomes your workspace name and profile.">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Company name" required>
                    <Input value={company.name} onChange={(e) => setCompany({ ...company, name: e.target.value })} placeholder="Acme Construction" />
                  </Field>
                  <Field label="Business type">
                    <Select value={company.type} onValueChange={(v) => setCompany({ ...company, type: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["LLC", "S-Corp", "C-Corp", "Sole Proprietor", "Partnership"].map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Industry">
                    <Select value={company.industry} onValueChange={(v) => setCompany({ ...company, industry: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Construction","HVAC","Electrical","Cleaning","Logistics","Manufacturing","Healthcare","Real Estate","Field Service","Security","Other"].map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Website">
                    <Input value={company.website} onChange={(e) => setCompany({ ...company, website: e.target.value })} placeholder="acme.com" />
                  </Field>
                  <Field label="Country" required>
                    <Input value={company.country} onChange={(e) => setCompany({ ...company, country: e.target.value })} />
                  </Field>
                  <Field label="City">
                    <Input value={company.city} onChange={(e) => setCompany({ ...company, city: e.target.value })} />
                  </Field>
                  <Field label="Address" className="sm:col-span-2">
                    <Input value={company.address} onChange={(e) => setCompany({ ...company, address: e.target.value })} placeholder="123 Main St" />
                  </Field>
                  <Field label="Phone">
                    <Input value={company.phone} onChange={(e) => setCompany({ ...company, phone: e.target.value })} placeholder="+1 555 555 5555" />
                  </Field>
                  <Field label="Company email" required>
                    <Input type="email" value={company.email} onChange={(e) => setCompany({ ...company, email: e.target.value })} placeholder="hello@acme.com" />
                  </Field>
                  <Field label="Timezone">
                    <Select value={company.timezone} onValueChange={(v) => setCompany({ ...company, timezone: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["America/New_York","America/Chicago","America/Denver","America/Los_Angeles","Europe/London","Europe/Berlin","Asia/Singapore"].map((x) => <SelectItem key={x} value={x}>{x}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Company logo">
                    <Input type="file" />
                  </Field>
                </div>
              </StepShell>
            )}

            {step === 1 && (
              <StepShell title="Your admin account" desc="This account will be the workspace owner.">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" required><Input value={owner.firstName} onChange={(e) => setOwner({ ...owner, firstName: e.target.value })} /></Field>
                  <Field label="Last name"><Input value={owner.lastName} onChange={(e) => setOwner({ ...owner, lastName: e.target.value })} /></Field>
                  <Field label="Email" required><Input type="email" value={owner.email} onChange={(e) => setOwner({ ...owner, email: e.target.value })} /></Field>
                  <Field label="Phone"><Input value={owner.phone} onChange={(e) => setOwner({ ...owner, phone: e.target.value })} /></Field>
                  <Field label="Password" required><Input type="password" value={owner.password} onChange={(e) => setOwner({ ...owner, password: e.target.value })} /></Field>
                  <Field label="Confirm password" required>
                    <Input type="password" value={owner.confirm} onChange={(e) => setOwner({ ...owner, confirm: e.target.value })} />
                    {owner.confirm && owner.confirm !== owner.password && <p className="mt-1 text-xs text-destructive">Passwords don't match.</p>}
                  </Field>
                </div>
              </StepShell>
            )}

            {step === 2 && (
              <StepShell title="Subscription summary" desc="Confirm what you selected on the pricing page.">
                <div className="rounded-2xl border bg-secondary/40 p-5">
                  <div className="flex items-baseline justify-between">
                    <div className="text-lg font-semibold">{selectedPlan.name} plan</div>
                    <div className="text-xs text-muted-foreground">{yearly ? "Billed yearly" : "Billed monthly"}</div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <SummaryRow label="Base plan" value={`${currency(summary.baseMonthly)}/mo`} />
                    <SummaryRow label={`Modules (${summary.addons.length})`} value={`${currency(summary.addonMonthly)}/mo`} />
                    {yearly && <SummaryRow accent label="Annual discount" value={`− 20%`} />}
                    <SummaryRow label={`Tax (${Math.round(TAX_RATE * 100)}%)`} value={currency(summary.tax)} />
                  </div>
                  <div className="my-4 h-px bg-border" />
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-muted-foreground">Total {yearly ? "yearly" : "monthly"}</span>
                    <span className="text-2xl font-bold">{currency(summary.total)}</span>
                  </div>
                </div>
                {summary.addons.length > 0 && (
                  <div className="mt-4">
                    <div className="mb-2 text-sm font-semibold">Selected modules</div>
                    <div className="flex flex-wrap gap-2">
                      {summary.addons.map((m) => (
                        <span key={m.id} className="rounded-full border bg-card px-3 py-1 text-xs">{m.name} · +{currency(m.price)}/mo</span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-4 max-w-xs">
                  <Field label="Coupon code">
                    <Input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Optional" />
                  </Field>
                  <p className="mt-1 text-xs text-muted-foreground">Discount is applied at the payment step.</p>
                </div>
              </StepShell>
            )}

            {step === 3 && (
              <StepShell title="Review everything" desc="One last look before you pay and create your workspace.">
                <div className="grid gap-4">
                  <ReviewGroup title="Company">
                    <ReviewItem k="Name" v={company.name || "—"} />
                    <ReviewItem k="Industry" v={company.industry} />
                    <ReviewItem k="Country" v={company.country} />
                    <ReviewItem k="Email" v={company.email || "—"} />
                  </ReviewGroup>
                  <ReviewGroup title="Owner">
                    <ReviewItem k="Name" v={`${owner.firstName} ${owner.lastName}`.trim() || "—"} />
                    <ReviewItem k="Email" v={owner.email || "—"} />
                  </ReviewGroup>
                  <ReviewGroup title="Subscription">
                    <ReviewItem k="Plan" v={`${selectedPlan.name} (${yearly ? "yearly" : "monthly"})`} />
                    <ReviewItem k="Modules" v={summary.addons.length ? summary.addons.map((m) => m.name).join(", ") : "None"} />
                    <ReviewItem k="Total" v={currency(summary.total)} />
                  </ReviewGroup>
                </div>
                <label className="mt-6 flex items-start gap-2 text-sm">
                  <Checkbox checked={terms} onCheckedChange={(v) => setTerms(!!v)} className="mt-0.5" />
                  <span>I agree to Contractly's <a className="text-primary underline" href="#">Terms</a> and <a className="text-primary underline" href="#">Privacy Policy</a>.</span>
                </label>
              </StepShell>
            )}

            {step === 4 && (
              <StepShell title="Payment" desc="Secure checkout powered by Stripe.">
                {checkoutLoading ? (
                  <div className="flex items-center gap-2 py-8 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" /> Setting up secure payment…
                  </div>
                ) : !STRIPE_PUBLISHABLE_KEY ? (
                  <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    Payments aren't configured yet (missing Stripe publishable key).
                  </div>
                ) : !pendingSignupId ? (
                  <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> Couldn't start checkout. Go back and try again.
                  </div>
                ) : clientSecret ? (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CardPaymentStep
                      pendingSignupId={pendingSignupId}
                      total={summary.total}
                      billed={yearly ? "yearly" : "monthly"}
                      submitting={submitting}
                      setSubmitting={setSubmitting}
                      setSubmitError={setSubmitError}
                      onPaid={goToSuccess}
                    />
                  </Elements>
                ) : (
                  <NoChargeConfirmStep
                    pendingSignupId={pendingSignupId}
                    submitting={submitting}
                    setSubmitting={setSubmitting}
                    setSubmitError={setSubmitError}
                    onPaid={goToSuccess}
                  />
                )}
                {submitError && (
                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {submitError}
                  </div>
                )}
              </StepShell>
            )}

            {!isLastStep && (
              <div className="mt-8 flex items-center justify-between">
                <Button variant="ghost" onClick={back} disabled={step === 0}>
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back
                </Button>
                <Button onClick={goNext} disabled={!canProceed() || checkoutLoading} className="bg-brand-gradient text-primary-foreground shadow-glow">
                  {checkoutLoading ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : null}
                  Continue <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
            {isLastStep && (
              <div className="mt-8">
                <Button variant="ghost" onClick={back} disabled={submitting}>
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar summary */}
          <aside className="self-start rounded-3xl border bg-card p-6 shadow-card lg:sticky lg:top-24">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Your order</div>
            <div className="mt-1 text-xl font-bold">{selectedPlan.name}</div>
            <div className="text-xs text-muted-foreground">{yearly ? "Yearly" : "Monthly"} billing</div>
            <div className="my-4 h-px bg-border" />
            <div className="space-y-2 text-sm">
              <SummaryRow label="Base" value={`${currency(summary.baseMonthly)}/mo`} />
              <SummaryRow label={`Modules (${summary.addons.length})`} value={`${currency(summary.addonMonthly)}/mo`} />
              {yearly && <SummaryRow accent label="Discount" value="− 20%" />}
              <SummaryRow label="Tax" value={currency(summary.tax)} />
            </div>
            <div className="my-4 h-px bg-border" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="text-2xl font-bold">{currency(summary.total)}</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Secure Stripe checkout. Cancel or change modules anytime.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}

type PaymentStepProps = {
  pendingSignupId: string;
  submitting: boolean;
  setSubmitting: (v: boolean) => void;
  setSubmitError: (v: string | null) => void;
  onPaid: (result: FinalizeCheckoutResponse) => void;
};

/** Payment step when there's a real amount due — collects card details via Stripe Elements. */
function CardPaymentStep({
  pendingSignupId,
  total,
  billed,
  submitting,
  setSubmitting,
  setSubmitError,
  onPaid,
}: PaymentStepProps & { total: number; billed: "monthly" | "yearly" }) {
  const stripe = useStripe();
  const elements = useElements();

  const handlePay = async () => {
    if (!stripe || !elements || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      sessionStorage.setItem(PENDING_SIGNUP_STORAGE_KEY, pendingSignupId);
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: { return_url: window.location.href },
        redirect: "if_required",
      });
      if (error) throw new Error(error.message || "Payment failed.");

      const result = await finalizeCheckout(pendingSignupId);
      sessionStorage.removeItem(PENDING_SIGNUP_STORAGE_KEY);
      onPaid(result);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Payment failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PaymentElement />
      <Button
        onClick={handlePay}
        disabled={!stripe || submitting}
        className="mt-6 w-full bg-brand-gradient text-primary-foreground shadow-glow"
        size="lg"
      >
        {submitting ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : null}
        Pay {currency(total)} {billed === "yearly" ? "/yr" : "/mo"} & create workspace
      </Button>
    </div>
  );
}

/** Payment step when nothing is due (e.g. a 100%-off coupon) — no card needed. */
function NoChargeConfirmStep({ pendingSignupId, submitting, setSubmitting, setSubmitError, onPaid }: PaymentStepProps) {
  const handleConfirm = async () => {
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const result = await finalizeCheckout(pendingSignupId);
      onPaid(result);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="rounded-xl border bg-secondary/40 p-4 text-sm text-muted-foreground">
        Nothing due right now — your discount covers this invoice in full.
      </div>
      <Button onClick={handleConfirm} disabled={submitting} className="mt-6 w-full bg-brand-gradient text-primary-foreground shadow-glow" size="lg">
        {submitting ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : null}
        Create workspace <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}

function StepShell({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}
function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <Label className="mb-1.5 flex text-xs font-medium text-muted-foreground">
        {label}{required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      {children}
    </div>
  );
}
function SummaryRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-medium tabular-nums", accent && "text-success")}>{value}</span>
    </div>
  );
}
function ReviewGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-secondary/40 p-4">
      <div className="mb-2 text-sm font-semibold">{title}</div>
      <dl className="grid gap-1.5 text-sm">{children}</dl>
    </div>
  );
}
function ReviewItem({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}
