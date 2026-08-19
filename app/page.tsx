import { JsonLd } from "@/components/seo/json-ld";
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
      <JsonLd src="/schema/organization.json" />
      <JsonLd src="/schema/software-application.json" />
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
