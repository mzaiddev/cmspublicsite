import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, Mail, Building2, KeyRound, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const subdomain = searchParams.get("subdomain");

  const items = [
    { icon: Check, t: "Subscription activated", d: "Your plan is live and ready to use." },
    { icon: Building2, t: "Workspace created", d: "We provisioned a dedicated workspace for your company." },
    { icon: KeyRound, t: "Admin account created", d: "You're the owner — invite teammates anytime." },
    { icon: Mail, t: "Verification email sent", d: "Check your inbox to confirm your email address." },
  ];

  return (
    <>
      <Helmet>
        <title>Workspace created — Contractly</title>
        <meta name="description" content="Your Contractly workspace is ready. Verify your email and jump in." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/success" />
      </Helmet>
      <div className="grid min-h-screen place-items-center bg-hero px-4 py-16">
        <div className="w-full max-w-2xl overflow-hidden rounded-[2rem] border bg-card p-8 shadow-glow sm:p-12">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow">
            <Sparkles className="h-6 w-6" />
          </div>
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Your workspace is ready 🎉
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
            Welcome to Contractly. Everything's set up — you can jump right into your workspace.
            {subdomain && (
              <>
                {" "}Your workspace subdomain: <span className="font-medium text-foreground">{subdomain}</span>
              </>
            )}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((i) => (
              <li key={i.t} className="flex items-start gap-3 rounded-2xl border bg-secondary/40 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-success/15 text-success">
                  <i.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-semibold">{i.t}</div>
                  <div className="text-xs text-muted-foreground">{i.d}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="bg-brand-gradient text-primary-foreground shadow-glow">
              Go to workspace <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Link to="/">
              <Button size="lg" variant="outline">Back to home</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
