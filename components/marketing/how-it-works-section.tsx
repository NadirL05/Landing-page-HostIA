import { AnimatedSection } from "@/components/marketing/animated-section";

const STEPS = [
  { time: "0 s", title: "Le client appelle", body: "HostIA décroche en moins de 2 sonneries, en français naturel, avec le nom de votre restaurant." },
  { time: "8 s", title: "Réservation prise et reformulée", body: "L'agent confirme date, heure, nombre de couverts et coordonnées — et reformule pour éviter toute erreur." },
  { time: "35 s", title: "Acompte demandé si besoin", body: "Si vous l'avez activé, HostIA envoie un lien de paiement par SMS pour sécuriser la réservation." },
  { time: "42 s", title: "L'équipe notifiée", body: "La réservation apparaît immédiatement dans votre outil de gestion et votre équipe reçoit une notification." },
] as const;

export function HowItWorksSection() {
  return (
    <AnimatedSection id="fonctionnement" style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 12, maxWidth: 560 }}>
          Un appel, quarante-deux secondes, zéro friction
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 56, maxWidth: 480 }}>
          Chronologie réelle d&rsquo;un appel type, du premier bip à la notification en salle.
        </p>

        {/* Chronologie reliée par l'onde vocale — pas des cartes numérotées
            identiques : le motif porte le récit du temps de l'appel. */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0 }}>
          {STEPS.map((step) => (
            <div
              key={step.time}
              style={{
                borderLeft: "1px solid var(--border-subtle)",
                padding: "0 24px 8px",
                position: "relative",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: -5,
                  top: 0,
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "var(--gradient-premium)",
                }}
              />
              <p className="font-mono" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "var(--color-champagne)", marginBottom: 16 }}>
                T + {step.time}
              </p>
              <p style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8, lineHeight: "24px" }}>{step.title}</p>
              <p style={{ fontSize: 15, lineHeight: "22px", color: "var(--text-secondary)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
