import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Building2,
  UserRound,
  Receipt,
  CreditCard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ANNUAL_DISCOUNT, MODULES, PLANS, TAX_RATE } from "@/lib/pricing-data";

const searchSchema = z.object({
  plan: z.enum(["starter", "professional", "business", "enterprise"]).default("professional"),
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
  { key: "payment", title: "Payment", icon: CreditCard },
  { key: "review", title: "Review", icon: ShieldCheck },
] as const;

function RegisterPage() {
  const { plan, billing, modules } = Route.useSearch();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [company, setCompany] = useState({
    name: "", type: "LLC", industry: "Construction", website: "", country: "United States",
    city: "", address: "", phone: "", email: "", timezone: "America/New_York",
  });
  const [owner, setOwner] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "",
  });
  const [payment, setPayment] = useState({
    method: "card", card: "", expiry: "", cvc: "", coupon: "", billingAddress: "",
  });
  const [terms, setTerms] = useState(false);

  const selectedPlan = PLANS.find((p) => p.id === plan)!;
  const selectedModuleIds = modules ? modules.split(",").filter(Boolean) : [];
  const yearly = billing === "yearly";

  const summary = useMemo(() => {
    const isEnterprise = selectedPlan.id === "enterprise";
    const addons = MODULES.filter(
      (m) =>
        selectedModuleIds.includes(m.id) &&
        !isEnterprise &&
        !selectedPlan.includedModules.includes(m.id),
    );
    const addonMonthly = addons.reduce((s, m) => s + m.price, 0);
    const subMonthly = selectedPlan.monthly + addonMonthly;
    const monthlyBilled = yearly ? subMonthly * (1 - ANNUAL_DISCOUNT) : subMonthly;
    const preTax = yearly ? monthlyBilled * 12 : monthlyBilled;
    const tax = preTax * TAX_RATE;
    return { addons, addonMonthly, baseMonthly: selectedPlan.monthly, subMonthly, monthlyBilled, preTax, tax, total: preTax + tax };
  }, [selectedPlan, selectedModuleIds, yearly]);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const canProceed = () => {
    if (step === 0) return company.name && company.email && company.country;
    if (step === 1) return owner.firstName && owner.email && owner.password && owner.password === owner.confirm;
    if (step === 3) return payment.method === "invoice" || payment.method === "bank" || (payment.card && payment.expiry && payment.cvc);
    if (step === 4) return terms;
    return true;
  };

  const submit = () => {
    // Simulated submit
    navigate({ to: "/success", search: { plan } as never });
  };

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
              </StepShell>
            )}

            {step === 3 && (
              <StepShell title="Payment" desc="Secure checkout powered by Stripe. Cancel anytime.">
                <RadioGroup value={payment.method} onValueChange={(v) => setPayment({ ...payment, method: v })} className="grid gap-2 sm:grid-cols-3">
                  {[
                    { v: "card", l: "Credit card" },
                    { v: "invoice", l: "Invoice" },
                    { v: "bank", l: "Bank transfer" },
                  ].map((o) => (
                    <label key={o.v} className={cn("flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm transition-colors", payment.method === o.v && "border-primary bg-primary/5")}>
                      <RadioGroupItem value={o.v} /> {o.l}
                    </label>
                  ))}
                </RadioGroup>

                {payment.method === "card" && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Card number" className="sm:col-span-2"><Input inputMode="numeric" value={payment.card} onChange={(e) => setPayment({ ...payment, card: e.target.value })} placeholder="4242 4242 4242 4242" /></Field>
                    <Field label="Expiry"><Input value={payment.expiry} onChange={(e) => setPayment({ ...payment, expiry: e.target.value })} placeholder="MM / YY" /></Field>
                    <Field label="CVC"><Input value={payment.cvc} onChange={(e) => setPayment({ ...payment, cvc: e.target.value })} placeholder="CVC" /></Field>
                  </div>
                )}

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Coupon code"><Input value={payment.coupon} onChange={(e) => setPayment({ ...payment, coupon: e.target.value })} placeholder="Optional" /></Field>
                  <Field label="Billing address"><Input value={payment.billingAddress} onChange={(e) => setPayment({ ...payment, billingAddress: e.target.value })} placeholder="Same as company address" /></Field>
                </div>
              </StepShell>
            )}

            {step === 4 && (
              <StepShell title="Review everything" desc="One last look before we create your workspace.">
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

            <div className="mt-8 flex items-center justify-between">
              <Button variant="ghost" onClick={back} disabled={step === 0}>
                <ArrowLeft className="mr-1 h-4 w-4" /> Back
              </Button>
              {step < STEPS.length - 1 ? (
                <Button onClick={next} disabled={!canProceed()} className="bg-brand-gradient text-primary-foreground shadow-glow">
                  Continue <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={submit} disabled={!canProceed()} className="bg-brand-gradient text-primary-foreground shadow-glow">
                  Create workspace <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              )}
            </div>
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
