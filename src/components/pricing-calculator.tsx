import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ANNUAL_DISCOUNT, TAX_RATE } from "@/lib/pricing-data";
import { usePricing } from "@/hooks/use-pricing";

const currency = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export type CalculatorState = {
  planId: string;
  moduleIds: string[];
  yearly: boolean;
};

export function encodeSelection(s: CalculatorState) {
  const params = new URLSearchParams();
  params.set("plan", s.planId);
  params.set("billing", s.yearly ? "yearly" : "monthly");
  params.set("modules", s.moduleIds.join(","));
  return params.toString();
}

export default function PricingCalculator() {
  const { plans, modules, coreModuleNames, isAllInclusive, isLoading, isError } = usePricing();
  const [planId, setPlanId] = useState<string>("");
  const [yearly, setYearly] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // Default to the "popular" plan (or the first one) once the catalog loads.
  useEffect(() => {
    if (!planId && plans.length > 0) {
      setPlanId(plans.find((p) => p.highlight)?.id ?? plans[0].id);
    }
  }, [plans, planId]);

  const plan = plans.find((p) => p.id === planId);
  const allInclusive = plan ? isAllInclusive(plan) : false;

  const isIncluded = (mid: string) =>
    allInclusive || (plan?.includedModules.includes(mid) ?? false);

  const isOfferedAsAddon = (mid: string) => plan?.addonModules.includes(mid) ?? false;

  const toggle = (mid: string) => {
    if (isIncluded(mid) || !isOfferedAsAddon(mid)) return;
    setSelected((prev) => {
      const n = new Set(prev);
      n.has(mid) ? n.delete(mid) : n.add(mid);
      return n;
    });
  };

  const summary = useMemo(() => {
    if (!plan) {
      return { addonModules: [], addonMonthly: 0, baseMonthly: 0, subMonthly: 0, monthlyBilled: 0, annualDiscount: 0, tax: 0, total: 0, preTax: 0 };
    }
    const addonModules = modules.filter((m) => selected.has(m.id) && !isIncluded(m.id));
    const addonMonthly = addonModules.reduce((s, m) => s + m.price, 0);
    const baseMonthly = plan.monthly;
    const subMonthly = baseMonthly + addonMonthly;
    const monthlyBilled = yearly ? subMonthly * (1 - ANNUAL_DISCOUNT) : subMonthly;
    const annualDiscount = yearly ? subMonthly * ANNUAL_DISCOUNT * 12 : 0;
    const yearlyTotal = monthlyBilled * 12;
    const preTax = yearly ? yearlyTotal : monthlyBilled;
    const tax = preTax * TAX_RATE;
    const total = preTax + tax;
    return { addonModules, addonMonthly, baseMonthly, subMonthly, monthlyBilled, annualDiscount, tax, total, preTax };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan, modules, selected, yearly]);

  const state: CalculatorState = {
    planId,
    yearly,
    moduleIds: Array.from(selected),
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-3xl border bg-card p-16 text-muted-foreground shadow-card">
        <Loader2 className="h-5 w-5 animate-spin" /> Loading live pricing…
      </div>
    );
  }

  if (isError || !plan) {
    return (
      <div className="rounded-3xl border bg-card p-16 text-center text-muted-foreground shadow-card">
        Pricing is temporarily unavailable. Please try again shortly.
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      {/* LEFT — plans + modules */}
      <div className="space-y-8">
        {/* Plan selector */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">1. Choose your base plan</h3>
              <p className="text-sm text-muted-foreground">Mandatory modules are always included.</p>
            </div>
            <div className="flex items-center gap-3 rounded-full border bg-card px-3 py-1.5 text-sm shadow-card">
              <span className={cn("font-medium", !yearly && "text-foreground", yearly && "text-muted-foreground")}>Monthly</span>
              <Switch checked={yearly} onCheckedChange={setYearly} aria-label="Toggle yearly billing" />
              <span className={cn("font-medium", yearly && "text-foreground", !yearly && "text-muted-foreground")}>
                Yearly <Badge className="ml-1 bg-success/15 text-success hover:bg-success/15">-20%</Badge>
              </span>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => {
              const active = p.id === planId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlanId(p.id)}
                  className={cn(
                    "relative rounded-2xl border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-card",
                    active && "border-primary ring-2 ring-primary/30 shadow-glow",
                  )}
                >
                  {p.highlight && (
                    <span className="absolute -top-2 right-3 rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                      Popular
                    </span>
                  )}
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.tagline}</div>
                  <div className="mt-3 text-2xl font-bold tracking-tight">
                    {currency(p.monthly)}
                    <span className="text-sm font-normal text-muted-foreground">/mo</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mandatory */}
        <div className="rounded-2xl border bg-secondary/40 p-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4 text-primary" /> Included in every plan
          </div>
          <div className="flex flex-wrap gap-2">
            {coreModuleNames.map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5 rounded-full border bg-card px-2.5 py-1 text-xs">
                <Check className="h-3 w-3 text-success" /> {m}
              </span>
            ))}
          </div>
        </div>

        {/* Optional modules */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">2. Add optional modules</h3>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {modules.map((m) => {
              const included = isIncluded(m.id);
              const offered = allInclusive || isOfferedAsAddon(m.id);
              const checked = included || selected.has(m.id);
              if (!offered) return null;
              return (
                <label
                  key={m.id}
                  className={cn(
                    "group relative flex cursor-pointer flex-col rounded-2xl border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5",
                    checked && !included && "border-primary/60 ring-1 ring-primary/30",
                    included && "opacity-90",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">{m.name}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{m.description}</div>
                    </div>
                    <Checkbox
                      checked={checked}
                      disabled={included}
                      onCheckedChange={() => toggle(m.id)}
                      aria-label={m.name}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                      {m.category}
                    </span>
                    <span className="text-sm font-semibold">
                      {included ? (
                        <span className="text-success">Included</span>
                      ) : (
                        <>
                          +{currency(m.price)}
                          <span className="text-xs font-normal text-muted-foreground">/mo</span>
                        </>
                      )}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT — summary */}
      <aside className="lg:sticky lg:top-24 self-start">
        <div className="rounded-3xl border bg-card p-6 shadow-glow">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Your subscription
          </div>
          <div className="text-2xl font-bold">{plan.name}</div>

          <div className="mt-5 space-y-2 text-sm">
            <Row label="Base plan" value={`${currency(summary.baseMonthly)}/mo`} />
            <Row
              label={`Add-ons (${summary.addonModules.length})`}
              value={`${currency(summary.addonMonthly)}/mo`}
            />
            {yearly && (
              <Row
                label="Annual discount"
                value={`− ${currency(summary.annualDiscount)}/yr`}
                accent="success"
              />
            )}
            <Row
              label={`Tax (${Math.round(TAX_RATE * 100)}%)`}
              value={currency(summary.tax)}
            />
          </div>

          <div className="my-5 h-px bg-border" />

          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">
              Billed {yearly ? "annually" : "monthly"}
            </span>
            <span className="text-3xl font-bold tracking-tight">
              {currency(summary.total)}
            </span>
          </div>
          <div className="mt-1 text-right text-xs text-muted-foreground">
            {yearly
              ? `${currency(summary.monthlyBilled)}/mo effective`
              : "per month, plus tax"}
          </div>

          <Link
            to="/register"
            search={{
              plan: state.planId,
              billing: state.yearly ? "yearly" : "monthly",
              modules: state.moduleIds.join(","),
            } as never}
            className="mt-6 block"
          >
            <Button size="lg" className="w-full bg-brand-gradient text-primary-foreground shadow-glow">
              Continue to registration
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>

          <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
            <p className="flex items-center gap-1.5"><Check className="h-3 w-3 text-success" /> Transparent pricing, no hidden fees</p>
            <p className="flex items-center gap-1.5"><Check className="h-3 w-3 text-success" /> Cancel or change modules anytime</p>
            <p className="flex items-center gap-1.5"><Check className="h-3 w-3 text-success" /> SOC 2 & GDPR-ready platform</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: "success" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-medium tabular-nums", accent === "success" && "text-success")}>
        {value}
      </span>
    </div>
  );
}
