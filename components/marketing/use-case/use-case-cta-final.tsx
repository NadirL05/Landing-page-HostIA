import Link from "next/link";
import { AnimatedSection } from "@/components/marketing/animated-section";
import type { UseCaseMeta } from "@/lib/seo/use-cases";

/** CTA final — même bande obsidienne que CtaSection (home), copy paramétrée par page. Inclut aussi le lien tarifs requis par la spec §6 point 15. */
export function UseCaseCtaFinal({ meta }: { meta: UseCaseMeta }) {
  return (
    <AnimatedSection className="cta-bleed" style={{ padding: "96px 20px" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 400,
          background: "radial-gradient(50% 50% at 50% 50%, rgba(217,119,63,0.16) 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <h2
          className="font-serif"
          style={{ fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: "clamp(36px, 5vw, 56px)", fontWeight: 700, marginBottom: 20, letterSpacing: "-0.02em" }}
        >
          {meta.ctaFinalHeading}
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 36, lineHeight: "24px", maxWidth: 520, margin: "0 auto 36px" }}>{meta.ctaFinalBody}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={meta.ctaPrimaryHref} className="btn-primary">
            {meta.ctaPrimaryLabel}
          </a>
          <a href={meta.ctaSecondaryHref} className="btn-secondary">
            {meta.ctaSecondaryLabel}
          </a>
        </div>
        <p style={{ marginTop: 24, fontSize: 14 }}>
          <Link href="/pricing" style={{ color: "var(--text-tertiary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
            Voir les tarifs HostIA
          </Link>
        </p>
      </div>
    </AnimatedSection>
  );
}
