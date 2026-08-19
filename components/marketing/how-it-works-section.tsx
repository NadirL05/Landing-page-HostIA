import { AnimatedSection } from "@/components/marketing/animated-section";

const STEPS = [
  { time: "0 s", title: "Le client appelle", body: "HostIA décroche en moins de 2 sonneries, en français naturel, avec le nom de votre restaurant." },
  { time: "8 s", title: "Réservation prise et reformulée", body: "L'agent confirme date, heure, nombre de couverts et coordonnées — et reformule pour éviter toute erreur." },
  { time: "35 s", title: "Acompte demandé si besoin", body: "Si vous l'avez activé, HostIA envoie un lien de paiement par SMS pour sécuriser la réservation." },
  { time: "42 s", title: "L'équipe notifiée", body: "La réservation apparaît immédiatement dans votre outil de gestion et votre équipe reçoit une notification." },
] as const;

/*
 * La chronologie n'est plus une rangée de cartes numérotées : c'est le
 * ticket de caisse que le service imprime en direct, ligne après ligne,
 * jusqu'au "total" tamponné en bas — le même objet papier que celui du
 * hero, mais déroulé en pleine longueur pour raconter les 42 secondes de
 * l'appel comme une note de service, pas une feature list.
 */
export function HowItWorksSection() {
  return (
    <AnimatedSection id="fonctionnement" style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 12, textAlign: "center" }}>
          Un appel, quarante-deux secondes, zéro friction
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 48, textAlign: "center" }}>
          Le ticket réel d&rsquo;un appel type, du premier bip à la notification en salle.
        </p>

        <div className="ticket-card" style={{ padding: "34px 8px 30px", margin: "0 auto", maxWidth: 480 }}>
          <div style={{ textAlign: "center", marginBottom: 18, padding: "0 28px" }}>
            <p className="font-mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ticket-ink)" }}>
              — HostIA · Journal d&rsquo;appel —
            </p>
          </div>
          <hr className="ticket-divider" style={{ margin: "0 24px 20px" }} />

          {STEPS.map((step, i) => (
            <div key={step.time}>
              <div style={{ padding: "0 28px", display: "flex", gap: 16 }}>
                <p className="font-mono" style={{ fontSize: 13, fontWeight: 700, color: "var(--color-champagne)", minWidth: 44, flexShrink: 0, paddingTop: 1 }}>
                  {step.time}
                </p>
                <div style={{ paddingBottom: i === STEPS.length - 1 ? 0 : 18 }}>
                  <p className="font-mono" style={{ fontSize: 15, fontWeight: 700, color: "var(--color-ticket-ink)", marginBottom: 5, lineHeight: "20px" }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: "21px", color: "var(--color-ticket-ink-soft)" }}>{step.body}</p>
                </div>
              </div>
              {i < STEPS.length - 1 ? <hr className="ticket-divider" style={{ margin: "16px 24px" }} /> : null}
            </div>
          ))}

          <hr className="ticket-divider" style={{ margin: "22px 24px 16px" }} />
          <div style={{ padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p className="font-mono" style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ticket-ink)", letterSpacing: "0.04em" }}>
              TOTAL APPEL
            </p>
            <p className="font-mono" style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ticket-ink)" }}>
              00:42
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
