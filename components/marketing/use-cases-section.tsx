import Link from "next/link";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { USE_CASES } from "@/lib/seo/use-cases";

/** Section accueil "Ce que HostIA prend en charge" — maillage vers les 3 pages cas d'usage (spec §12). */
export function UseCasesSection() {
  return (
    <AnimatedSection style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 12, textAlign: "center" }}>
          Ce que HostIA prend en charge
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 48, textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
          Trois situations concrètes, avec le parcours exact et les limites de chacune.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {USE_CASES.map((useCase) => (
            <Link
              key={useCase.slug}
              href={useCase.path}
              className="material-ultrathin"
              style={{ display: "block", borderRadius: 20, padding: "28px", textDecoration: "none", transition: "transform var(--duration-normal) var(--ease-spring)" }}
            >
              <p className="font-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 10 }}>
                {useCase.kicker}
              </p>
              <p className="font-serif" style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", lineHeight: "27px", marginBottom: 10 }}>
                {useCase.h1}
              </p>
              <p style={{ fontSize: 14, lineHeight: "21px", color: "var(--text-tertiary)" }}>En savoir plus →</p>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
