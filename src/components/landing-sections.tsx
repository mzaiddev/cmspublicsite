import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  BarChart3,
  Workflow,
  MessageSquare,
  CreditCard,
  FileSignature,
  ClipboardList,
  Users,
  Building2,
  HardHat,
  FormInput,
  FileText,
  LineChart,
  UsersRound,
  Mail,
  LifeBuoy,
  Calendar,
  Briefcase,
  Landmark,
  Receipt,
  Code2,
  Palette,
  Brush,
  KeyRound,
  Lock,
  Wrench,
  Hammer,
  Fan,
  Truck,
  Factory,
  Stethoscope,
  Radio,
  Shield,
  Home,
  Star,
  Check,
  Play,
  ArrowRight,
  Twitter,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INDUSTRIES } from "@/lib/pricing-data";
import { usePricing } from "@/hooks/use-pricing";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HardHat,
  Building2,
  Workflow,
  FormInput,
  ClipboardList,
  Users,
  MessageSquare,
  FileSignature,
  FileText,
  CreditCard,
  BarChart3,
  LineChart,
  UsersRound,
  Mail,
  LifeBuoy,
  Calendar,
  Briefcase,
  Landmark,
  Receipt,
  Code2,
  Palette,
  Brush,
  KeyRound,
  Shield,
  Lock,
  Wrench,
  Hammer,
  Fan,
  Truck,
  Factory,
  Stethoscope,
  Radio,
  Home,
  Zap,
  Sparkles,
  ShieldCheck,
};

/* ---------------- HEADER ---------------- */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#industries" },
    { label: "Pricing", href: "#pricing" },
    { label: "Modules", href: "#modules-compare" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-primary-foreground shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-base font-bold tracking-tight">Contractly</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <Link to="/register">
          <Button size="sm" className="hidden md:inline-flex bg-brand-gradient text-primary-foreground shadow-glow">
            Get started
          </Button>
        </Link>

        <button
          className="grid h-10 w-10 place-items-center rounded-md md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 pt-2">
              <Link to="/register" onClick={() => setOpen(false)}>
                <Button className="w-full bg-brand-gradient text-primary-foreground">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-24 -left-20 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute -top-10 right-0 -z-10 h-96 w-96 rounded-full bg-[color:var(--brand-2)]/25 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mx-auto mb-6 gap-1.5 rounded-full border bg-card/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary" />
            New — AI workflow automation is live
            <ChevronRight className="h-3 w-3" />
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Run your entire contractor business{" "}
            <span className="text-gradient">from one platform</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Contractly is the modern operating system for contractor-driven companies — onboarding,
            work orders, agreements, invoices, payments, and analytics, unified.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/register">
              <Button size="lg" className="bg-brand-gradient text-primary-foreground shadow-glow">
                Get started
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              <Play className="h-4 w-4" /> Book a demo
            </Button>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            Transparent pricing · Cancel anytime · Set up in under 10 minutes
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <img src="/cmradminhome.PNG" alt="" />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  children,
  className,
  delay = "0s",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 rounded-2xl border bg-card p-3 shadow-card animate-float",
        className,
      )}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border bg-background">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <div className="ml-3 h-6 flex-1 max-w-md rounded-md bg-secondary" />
      </div>
      <div className="grid grid-cols-12 gap-0">
        {/* sidebar */}
        <aside className="col-span-3 hidden border-r bg-secondary/40 p-4 lg:block">
          <div className="mb-4 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-gradient text-primary-foreground">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-semibold">Contractly</span>
          </div>
          <div className="space-y-1">
            {[
              "Overview",
              "Contractors",
              "Work Orders",
              "Invoices",
              "Messaging",
              "Analytics",
              "Settings",
            ].map((l, i) => (
              <div
                key={l}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs",
                  i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground",
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                {l}
              </div>
            ))}
          </div>
        </aside>
        {/* main */}
        <div className="col-span-12 p-5 lg:col-span-9">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Operations overview</div>
              <div className="text-xs text-muted-foreground">Today · March 14</div>
            </div>
            <div className="hidden gap-2 sm:flex">
              <div className="h-8 w-24 rounded-md bg-secondary" />
              <div className="h-8 w-8 rounded-md bg-brand-gradient" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { l: "Active jobs", v: "128", t: "+8%" },
              { l: "Contractors", v: "412", t: "+3%" },
              { l: "Invoices due", v: "$46.2k", t: "-2%" },
              { l: "Revenue MTD", v: "$182k", t: "+12%" },
            ].map((k) => (
              <div key={k.l} className="rounded-xl border p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {k.l}
                </div>
                <div className="mt-1 text-lg font-bold">{k.v}</div>
                <div className="text-[11px] text-success">{k.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
            <div className="rounded-xl border p-4 lg:col-span-2">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-xs font-semibold">Revenue</div>
                <div className="text-[11px] text-muted-foreground">Last 30 days</div>
              </div>
              <div className="flex h-32 items-end gap-1.5">
                {[42, 55, 38, 62, 48, 71, 58, 66, 74, 61, 82, 76, 91, 84].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-brand-gradient"
                    style={{ height: `${h}%`, opacity: 0.6 + i / 30 }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="mb-3 text-xs font-semibold">Recent activity</div>
              <div className="space-y-2.5">
                {[
                  { c: "text-success", t: "Invoice #2481 paid" },
                  { c: "text-primary", t: "Work order assigned" },
                  { c: "text-[color:var(--brand-2)]", t: "Contractor verified" },
                  { c: "text-warning", t: "Agreement pending" },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px]">
                    <span className={cn("h-1.5 w-1.5 rounded-full bg-current", a.c)} />
                    <span className="text-muted-foreground">{a.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TRUST / STATS ---------------- */
export function TrustSection() {
  const stats = [
    { v: "10,000+", l: "Contractors Managed" },
    { v: "500+", l: "Companies Trust Us" },
    { v: "99.9%", l: "Platform Uptime" },
    { v: "$120M+", l: "Payments Processed" },
  ];
  return (
    <section className="border-y bg-secondary/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          {["NORTHWIND", "ACME CO", "STELLARIS", "BLUEROOF", "IRONWORKS", "MERIDIAN"].map((b) => (
            <span key={b} className="text-sm font-bold tracking-[0.2em] text-muted-foreground">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
export function FeaturesSection() {
  const { modules } = usePricing();
  const featured = [
    {
      icon: HardHat,
      title: "Contractor Management",
      desc: "Onboard, verify, and manage 1099s with a beautiful contractor portal.",
    },
    {
      icon: Workflow,
      title: "Workflow Builder",
      desc: "Automate approvals, dispatch, and reminders with a visual builder.",
    },
    {
      icon: ClipboardList,
      title: "Work Orders",
      desc: "Assign, track, and complete jobs with real-time status updates.",
    },
    {
      icon: FileSignature,
      title: "Agreements & E-Sign",
      desc: "Send, negotiate, and legally sign contracts in minutes.",
    },
    {
      icon: CreditCard,
      title: "Invoices & Payments",
      desc: "Bill clients and pay contractors with built-in Stripe.",
    },
    // {
    //   icon: BarChart3,
    //   title: "Reports & Analytics",
    //   desc: "KPIs, insights, and exports for every stakeholder.",
    // },
  ];
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Everything you need"
          title="One platform for every part of your operation"
          subtitle="Contractly replaces spreadsheets, chats, and half a dozen tools with a modern, connected system your whole team will love."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((f, i) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 rounded-3xl border bg-secondary/40 p-6 sm:p-8">
          <div className="mb-4 text-sm font-semibold text-muted-foreground">
            And {modules.length}+ more modules
          </div>
          <div className="flex flex-wrap gap-2">
            {modules.map((m) => {
              const Icon = iconMap[m.icon] ?? Sparkles;
              return (
                <span
                  key={m.id}
                  className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium shadow-card"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" /> {m.name}
                </span>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
export function HowItWorks() {
  const steps = [
    { t: "Create account", d: "Sign up in seconds." },
    { t: "Choose subscription", d: "Pick a base plan." },
    // { t: "Select modules", d: "Enable what you need." },
    { t: "Company details", d: "Add your workspace." },
    { t: "Payment", d: "Secure Stripe checkout." },
    { t: "Platform ready", d: "Invite your team." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="How it works" title="From signup to live in under 10 minutes" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((s, i) => (
            <div key={s.t} className="relative rounded-2xl border bg-card p-5 shadow-card">
              <div className="mb-3 inline-grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-xs font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div className="text-sm font-semibold">{s.t}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.d}</div>
              {i < steps.length - 1 && (
                <ChevronRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARE PLANS ---------------- */
export function ComparePlans() {
  const { plans, modules, coreModuleNames, isAllInclusive, isLoading } = usePricing();

  if (isLoading || plans.length === 0) return null;

  const rows = [
    ...coreModuleNames.map((name) => ({ id: name, name, mandatory: true })),
    ...modules.map((m) => ({ id: m.id, name: m.name, mandatory: false })),
  ];

  const hasModule = (plan: (typeof plans)[number], id: string, mandatory: boolean) => {
    if (mandatory) return true;
    if (isAllInclusive(plan)) return true;
    return plan.includedModules.includes(id);
  };

  return (
    <section id="modules-compare" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Compare plans" title="Everything included, side by side" />
        <div className="mt-10 overflow-x-auto rounded-3xl border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-4 font-semibold">Module</th>
                {plans.map((p) => (
                  <th key={p.id} className="p-4 text-center font-semibold">
                    {p.name}
                    <div className="text-xs font-normal text-muted-foreground">${p.monthly}/mo</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id} className={cn("border-t", i % 2 === 1 && "bg-secondary/20")}>
                  <td className="p-3 font-medium">
                    {r.name}
                    {r.mandatory && (
                      <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/10">
                        Core
                      </Badge>
                    )}
                  </td>
                  {plans.map((p) => (
                    <td key={p.id} className="p-3 text-center">
                      {hasModule(p, r.id, r.mandatory) ? (
                        <Check className="mx-auto h-4 w-4 text-success" />
                      ) : (
                        <span className="text-xs text-muted-foreground">Add-on</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DASHBOARD PREVIEW TABS ---------------- */
export function ProductPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product tour"
          title="A modern workspace your team will actually use"
          subtitle="Beautifully designed screens for every workflow — from field to finance."
        />
        <Tabs defaultValue="overview" className="mt-10">
          <TabsList className="mx-auto flex w-fit flex-wrap justify-center gap-1 rounded-full bg-secondary p-1">
            {["overview", "invoices", "workorders", "messaging", "workflow"].map((t) => (
              <TabsTrigger
                key={t}
                value={t}
                className="rounded-full data-[state=active]:bg-brand-gradient data-[state=active]:text-primary-foreground"
              >
                {t[0].toUpperCase() + t.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          {[
            { v: "overview", src: "/userhomepage.PNG" },
            { v: "invoices", src: "/invoicepageadminside.PNG" },
            { v: "workorders", src: "/workorderpageadmin.PNG" },
            { v: "messaging", src: "/messagepage.PNG" },
            { v: "workflow", src: "/workflowpage.PNG" },
            // { v: "analytics", el: <MockAnalytics /> },
          ].map((t) => (
            <TabsContent key={t.v} value={t.v} className="mt-8">
              <div className="rounded-[2rem] border bg-card/70 p-2 shadow-glow">
                <img src={t?.src} alt="" />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border bg-background p-6">
      <div className="mb-4 text-sm font-semibold">{title}</div>
      {children}
    </div>
  );
}
function MockInvoices() {
  const rows = [
    { n: "INV-2481", c: "Acme Co", a: "$4,820", s: "Paid", cls: "text-success bg-success/10" },
    { n: "INV-2480", c: "Northwind", a: "$2,150", s: "Pending", cls: "text-warning bg-warning/10" },
    {
      n: "INV-2479",
      c: "Ironworks",
      a: "$8,900",
      s: "Overdue",
      cls: "text-destructive bg-destructive/10",
    },
    { n: "INV-2478", c: "Meridian", a: "$1,240", s: "Paid", cls: "text-success bg-success/10" },
  ];
  return (
    <Panel title="Invoices">
      <table className="w-full text-sm">
        <thead className="text-left text-xs text-muted-foreground">
          <tr>
            <th className="pb-3">Number</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.n} className="border-t">
              <td className="py-3 font-medium">{r.n}</td>
              <td>{r.c}</td>
              <td className="tabular-nums">{r.a}</td>
              <td>
                <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", r.cls)}>
                  {r.s}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}
function MockWorkOrders() {
  const cols = ["Todo", "In progress", "Review", "Done"];
  return (
    <Panel title="Work orders">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {cols.map((c) => (
          <div key={c} className="rounded-xl border bg-secondary/40 p-3">
            <div className="mb-2 text-xs font-semibold">{c}</div>
            <div className="space-y-2">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-lg border bg-card p-3 text-xs shadow-card">
                  <div className="font-medium">WO-{Math.floor(Math.random() * 900 + 100)}</div>
                  <div className="mt-1 text-muted-foreground">HVAC install · Site {i}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                      P{i}
                    </span>
                    <span className="text-muted-foreground">2d</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
function MockMessaging() {
  const msgs = [
    { u: "Sarah M.", t: "The scope looks good — sending the signed copy now.", me: false },
    { u: "You", t: "Great, I'll assign the work order for Tuesday.", me: true },
    { u: "Sarah M.", t: "Perfect. Uploading site photos to the portal.", me: false },
  ];
  return (
    <Panel title="Messaging">
      <div className="grid gap-4 md:grid-cols-[220px_1fr]">
        <div className="space-y-1 rounded-xl border p-2">
          {["#general", "#dispatch", "Sarah M.", "Ironworks", "Northwind"].map((c, i) => (
            <div
              key={c}
              className={cn(
                "rounded-md px-2 py-1.5 text-xs",
                i === 2 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground",
              )}
            >
              {c}
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {msgs.map((m, i) => (
            <div key={i} className={cn("flex", m.me && "justify-end")}>
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-3 py-2 text-sm",
                  m.me ? "bg-brand-gradient text-primary-foreground" : "bg-secondary",
                )}
              >
                {!m.me && <div className="mb-0.5 text-[10px] font-semibold opacity-70">{m.u}</div>}
                {m.t}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
function MockWorkflow() {
  return (
    <Panel title="Workflow builder">
      <div className="grid grid-cols-5 items-center gap-3">
        {[
          "Trigger: New job",
          "Verify contractor",
          "Send agreement",
          "Await signature",
          "Dispatch",
        ].map((s, i) => (
          <div key={s} className="relative">
            <div className="rounded-xl border bg-card p-3 text-center text-xs font-medium shadow-card">
              {s}
            </div>
            {i < 4 && (
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-muted-foreground md:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {["When document signed", "Create invoice", "Notify client"].map((s) => (
          <div
            key={s}
            className="rounded-lg border border-dashed p-3 text-center text-xs text-muted-foreground"
          >
            {s}
          </div>
        ))}
      </div>
    </Panel>
  );
}
function MockAnalytics() {
  return (
    <Panel title="Analytics">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-2 rounded-xl border p-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-semibold">Revenue vs jobs</span>
            <span className="text-muted-foreground">Q1</span>
          </div>
          <div className="relative h-40">
            <svg viewBox="0 0 400 160" className="h-full w-full">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.55 0.2 258)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="oklch(0.55 0.2 258)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,120 C60,80 120,100 180,60 C240,20 300,90 400,40 L400,160 L0,160 Z"
                fill="url(#g1)"
              />
              <path
                d="M0,120 C60,80 120,100 180,60 C240,20 300,90 400,40"
                fill="none"
                stroke="oklch(0.55 0.2 258)"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>
        <div className="rounded-xl border p-4">
          <div className="mb-3 text-xs font-semibold">Top industries</div>
          <div className="space-y-2 text-xs">
            {[
              { n: "Construction", v: 62 },
              { n: "HVAC", v: 48 },
              { n: "Electrical", v: 33 },
              { n: "Cleaning", v: 21 },
            ].map((r) => (
              <div key={r.n}>
                <div className="flex justify-between">
                  <span>{r.n}</span>
                  <span className="text-muted-foreground">{r.v}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-brand-gradient"
                    style={{ width: `${r.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
export function Testimonials() {
  const items = [
    {
      q: "We replaced five tools with Contractly and saved 20 hours a week. The workflow builder alone is a game-changer.",
      n: "Jordan Reyes",
      r: "COO, BlueRoof Services",
    },
    {
      q: "Our contractors love the portal. Onboarding used to take a week — now it's done in an afternoon.",
      n: "Priya Nair",
      r: "Ops Director, Ironworks",
    },
    {
      q: "The pricing calculator let us pay only for what we needed. Zero fluff, all impact.",
      n: "Marcus Lee",
      r: "Founder, Stellaris Field",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Loved by operators" title="What customers are saying" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.n} className="flex flex-col rounded-3xl border bg-card p-6 shadow-card">
              <div className="flex text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-brand-gradient" />
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
export function IndustriesSection() {
  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Solutions" title="Purpose-built for contractor-driven industries" />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((i) => {
            const Icon = iconMap[i.icon] ?? Sparkles;
            return (
              <div
                key={i.name}
                className="group flex flex-col items-center justify-center rounded-2xl border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold">{i.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FaqSection() {
  const faqs = [
    {
      q: "How does billing work?",
      a: "Pick a plan, add the modules you need, and pay securely with Stripe. You can cancel or change modules anytime.",
    },
    {
      q: "Can I change modules after subscribing?",
      a: "Yes. You can add or remove modules at any time — pricing adjusts on the next billing cycle.",
    },
    {
      q: "How does the annual discount work?",
      a: "Billing annually saves 20% across your plan and modules. You'll see the discount live in the calculator.",
    },
    {
      q: "Is my data secure?",
      a: "We're SOC 2-ready with encryption at rest and in transit, RBAC, SSO, and full audit logs.",
    },
    {
      q: "Do you offer white-label or SSO?",
      a: "Yes — both are available as modules on the Business plan and included on Enterprise.",
    },
    {
      q: "How does payment work?",
      a: "We use Stripe. You can pay by card, ACH, or invoice on Business and Enterprise.",
    },
  ];
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-2xl border bg-card px-2 shadow-card"
        >
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-3">
              <AccordionTrigger className="text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function CtaBand() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border bg-brand-gradient p-10 text-primary-foreground shadow-glow sm:p-16">
        <div className="pointer-events-none absolute" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to run your contractor business like a $100M company?
          </h2>
          <p className="mt-4 text-base opacity-90 sm:text-lg">
            Choose your plan, pick your modules, and launch your workspace in under 10 minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-primary">
                Get started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/10"
            >
              Talk to sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function SiteFooter() {
  const cols = [
    { t: "Product", l: ["Features", "Modules", "Pricing", "Changelog", "Roadmap"] },
    { t: "Solutions", l: ["Construction", "HVAC", "Field Service", "Real Estate", "Logistics"] },
    { t: "Resources", l: ["Docs", "API", "Guides", "Support", "Status"] },
    { t: "Company", l: ["About", "Customers", "Careers", "Press", "Contact"] },
    { t: "Legal", l: ["Privacy", "Terms", "Cookies", "DPA", "Security"] },
  ];
  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-primary-foreground shadow-glow">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-base font-bold">Contractly</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              The modern operating system for contractor-driven businesses.
            </p>
            <div className="mt-4 flex gap-2">
              {[Twitter, Github, Linkedin, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-lg border bg-card text-muted-foreground transition-colors hover:text-foreground"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-sm font-semibold">{c.t}</div>
              <ul className="mt-3 space-y-2 text-sm">
                {c.l.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Contractly, Inc. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" /> SOC 2 · GDPR · Encrypted end-to-end
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- HELPERS ---------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium text-primary shadow-card">
        <Sparkles className="h-3 w-3" /> {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}
