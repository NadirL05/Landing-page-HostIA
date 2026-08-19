import Link from "next/link";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { PricingCards } from "@/components/marketing/pricing-cards";

export function PricingTeaserSection() {
  return (
    <AnimatedSection id="pricing" style={{ padding: "0 20px 96px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: "clamp(38px, 5vw, 54px)", fontWeight: 600, marginBottom: 12, maxWidth: 520 }}>
          Tarifs clairs, sans surprise
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 56 }}>
          Annulez à tout moment · Aucun frais sur les réservations
        </p>
        <PricingCards />
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/pricing" className="btn-secondary">Voir le détail des formules</Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
