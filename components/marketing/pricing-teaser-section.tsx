import Link from "next/link";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { PricingCards } from "@/components/marketing/pricing-cards";

export function PricingTeaserSection() {
  return (
    <AnimatedSection id="pricing" style={{ padding: "0 20px 96px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 16, textAlign: "center" }}>
          Tarifs clairs, sans surprise
        </h2>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: 16, marginBottom: 48 }}>
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
