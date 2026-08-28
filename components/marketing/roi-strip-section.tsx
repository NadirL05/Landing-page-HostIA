import { AnimatedSection } from "@/components/marketing/animated-section";

const STATS = [
  { value: "35-85 €", label: "perdus par appel manqué", source: "Loman, 2026" },
  { value: "150-400", label: "appels manqués / mois en moyenne", source: "Loman, 2026" },
  { value: "4 050 €", label: "de revenu potentiellement perdu / mois", source: "Washington Hospitality Assoc." },
] as const;

/*
 * Réponse directe à un trou identifié en analyse concurrentielle : la
 * landing n'avait aucune preuve chiffrée du coût de l'inaction, contrairement
 * à des concurrents qui ancrent leur prix contre un salaire de standardiste
 * ou une commission de plateforme. Trois chiffres, sourcés, pas d'image.
 */
export function RoiStripSection() {
  return (
    <AnimatedSection style={{ padding: "0 20px var(--space-section-y)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <p className="font-mono" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 16 }}>
          Le coût d&apos;un appel manqué
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: 28,
                borderRadius: 28,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <p className="font-serif" style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 700, color: "var(--color-champagne)", lineHeight: 1, marginBottom: 10 }}>
                {stat.value}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: "22px", marginBottom: 12 }}>{stat.label}</p>
              <p className="font-mono" style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{stat.source}</p>
            </div>
          ))}
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, marginTop: 24, maxWidth: 640 }}>
          Sur une base conservative, HostIA coûte moins de 16 % du revenu potentiellement récupéré chaque mois.
        </p>
      </div>
    </AnimatedSection>
  );
}
