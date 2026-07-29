import { Helmet } from "react-helmet-async";
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

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Contractly — Run your contractor business from one platform</title>
        <meta
          name="description"
          content="Contractly is the modern operating system for contractor-driven companies. Onboarding, work orders, agreements, invoices, payments, and analytics — all in one place."
        />
        <meta property="og:title" content="Contractly — Contractor CRM & operations platform" />
        <meta
          property="og:description"
          content="The all-in-one platform for managing contractors, vendors, work orders, invoices, and payments."
        />
        <meta property="og:url" content="/" />
        <meta name="twitter:title" content="Contractly" />
        <meta
          name="twitter:description"
          content="Run your contractor business from one platform."
        />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Contractly",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "49", priceCurrency: "USD" },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main>
          <Hero />
          {/* <TrustSection /> */}
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

          {/* <ComparePlans /> */}
          <ProductPreview />
          <Testimonials />
          <IndustriesSection />
          {/* <FaqSection /> */}
          <CtaBand />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
