import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { Check, ArrowRight, Mail, Building2, KeyRound, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/success")({
  validateSearch: z.object({
    plan: z.string().optional(),
  }),
  head: () => ({
    meta: [
      { title: "Workspace created — Contractly" },
      { name: "description", content: "Your Contractly workspace is ready. Verify your email and jump in." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/success" }],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  const items = [
    { icon: Check, t: "Subscription activated", d: "Your plan is live and ready to use." },
    { icon: Building2, t: "Workspace created", d: "We provisioned a dedicated workspace for your company." },
    { icon: KeyRound, t: "Admin account created", d: "You're the owner — invite teammates anytime." },
    { icon: Mail, t: "Verification email sent", d: "Check your inbox to confirm your email address." },
  ];
  return (
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
  );
}
