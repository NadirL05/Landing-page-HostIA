import { AnimatedSection } from "@/components/marketing/animated-section";
import { SIGNUP_URL, DEMO_URL } from "@/lib/seo/schemas";

export function CtaSection() {
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
        <p className="font-mono" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 20 }}>
          Chaque appel manqué appelle ailleurs
        </p>
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            lineHeight: "clamp(38px, 5vw, 62px)",
            fontWeight: 700,
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          Un appel qui sonne dans le vide, c&rsquo;est un client qui appelle ailleurs.
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 36, lineHeight: "24px", maxWidth: 520, margin: "0 auto 36px" }}>
          Écoutez HostIA dialoguer avec un client — réservation, commande, coup de feu — sans inscription ni compte démo.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={DEMO_URL} className="btn-primary">Essayer gratuitement</a>
          <a href={SIGNUP_URL} className="btn-secondary">Créer un compte</a>
        </div>
      </div>
    </AnimatedSection>
  );
}
