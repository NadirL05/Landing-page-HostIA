import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema } from "@/lib/seo/schemas";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { HeroSection } from "@/components/marketing/hero-section";
import { PainSection } from "@/components/marketing/pain-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { PricingTeaserSection } from "@/components/marketing/pricing-teaser-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";
export default function Home() {
  return (
    <>
      {/* SoftwareApplication déplacé sur /pricing uniquement (audit SEO 24/08 :
          était dupliqué mot pour mot sur / et /pricing, même pattern déjà
          appliqué à FAQPage via includeSchema). */}
      <JsonLd data={organizationSchema()} />
      <MarketingNav />
      <main>
        <HeroSection />
        <PainSection />
        <HowItWorksSection />
        <PricingTeaserSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
