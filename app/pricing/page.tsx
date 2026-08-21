import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { FaqSection } from "@/components/marketing/faq-section";
import { Footer } from "@/components/marketing/footer";
import { SITE_URL, softwareApplicationSchema, breadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Tarifs | HostIA",
  description: "Tarifs HostIA : Simple 150€/mois, Medium 350€/mois, Luxe 650€/mois. Agent vocal IA pour restaurant, sans engagement long.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Tarifs HostIA",
    description: "Simple 150€/mois, Medium 350€/mois, Luxe 650€/mois. Agent vocal IA pour restaurant.",
    url: `${SITE_URL}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Tarifs", path: "/pricing" },
        ])}
      />
      <MarketingNav />
      <main style={{ padding: "0 20px 96px", paddingTop: 160 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <h1 className="font-serif" style={{ fontSize: "clamp(40px, 6vw, 56px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>
            Tarifs HostIA
          </h1>
          <p style={{ maxWidth: 560, margin: "0 auto", color: "var(--text-secondary)", fontSize: 16 }}>
            Trois formules mensuelles, sans engagement long. Le prix correspond au périmètre pris en charge, pas au nombre d&rsquo;utilisateurs.
          </p>
        </div>
        <div style={{ maxWidth: 1120, margin: "56px auto 0" }}>
          <PricingCards ctaLabel="Essayer" />
        </div>
        <div style={{ maxWidth: 680, margin: "80px auto 0" }}>
          <FaqSection includeSchema={false} />
        </div>
      </main>
      <Footer />
    </>
  );
}
