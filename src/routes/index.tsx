import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  Hero,
  TrustSection,
  FeaturesSection,
  HowItWorks,
  ComparePlans,
  ProductPreview,
  Testimonials,
  IndustriesSection,
  FaqSection,
  CtaBand,
  SiteFooter,
} from "@/components/landing-sections";
import PricingCalculator from "@/components/pricing-calculator";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Contractly — Run your contractor business from one platform" },
      {
        name: "description",
        content:
          "Contractly is the modern operating system for contractor-driven companies. Onboarding, work orders, agreements, invoices, payments, and analytics — all in one place.",
      },
      { property: "og:title", content: "Contractly — Contractor CRM & operations platform" },
      { property: "og:description", content: "The all-in-one platform for managing contractors, vendors, work orders, invoices, and payments." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contractly" },
      { name: "twitter:description", content: "Run your contractor business from one platform." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Contractly",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "49", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustSection />
        <FeaturesSection />
        <HowItWorks />

        {/* PRICING */}
        <section id="pricing" className="relative py-24">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero opacity-60" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium text-primary shadow-card">
                Pricing calculator
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Build the plan that fits your business
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Start with a base plan. Add only the modules you need. Pricing updates instantly.
              </p>
            </div>
            <div className="mt-12">
              <PricingCalculator />
            </div>
          </div>
        </section>

        <ComparePlans />
        <ProductPreview />
        <Testimonials />
        <IndustriesSection />
        <FaqSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
