import { AnimatedSection } from "@/components/marketing/animated-section";
import { SIGNUP_URL, DEMO_URL } from "@/lib/seo/schemas";

export function CtaSection() {
  return (
    <AnimatedSection style={{ padding: "0 20px 120px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ borderRadius: 28, padding: 2, background: "var(--gradient-premium)" }}>
          <div style={{ borderRadius: 26, background: "var(--color-paper)", padding: "48px 40px", textAlign: "center" }}>
            <h2 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
              Un appel qui sonne dans le vide, c&rsquo;est un client qui appelle ailleurs.
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 32, lineHeight: "23px" }}>
              Essayez HostIA sur votre restaurant ou écoutez d&rsquo;abord la démo interactive, sans inscription.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={SIGNUP_URL} className="btn-primary">Essayer HostIA</a>
              <a href={DEMO_URL} className="btn-secondary">Écouter la démo</a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
