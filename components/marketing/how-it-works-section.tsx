import { AnimatedSection } from "@/components/marketing/animated-section";

const STEPS = [
  { n: "01", title: "Le client appelle", body: "HostIA décroche en moins de 2 sonneries, en français naturel, avec le nom de votre restaurant." },
  { n: "02", title: "Réservation prise et reformulée", body: "L'agent confirme date, heure, nombre de couverts et coordonnées — et reformule pour éviter toute erreur." },
  { n: "03", title: "Acompte demandé si besoin", body: "Si vous l'avez activé, HostIA envoie un lien de paiement par SMS pour sécuriser la réservation." },
  { n: "04", title: "L'équipe notifiée", body: "La réservation apparaît immédiatement dans votre outil de gestion et votre équipe reçoit une notification." },
] as const;

export function HowItWorksSection() {
  return (
    <AnimatedSection id="fonctionnement" style={{ padding: "0 20px 96px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "clamp(34px, 5vw, 46px)", fontWeight: 600, marginBottom: 48 }}>
          Comment fonctionne HostIA
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {STEPS.map((step) => (
            <div key={step.n} className="material-ultrathin" style={{ borderRadius: 28, padding: 32 }}>
              <p className="font-serif" style={{ fontSize: 40, fontWeight: 700, color: "var(--color-champagne)", lineHeight: 1, marginBottom: 16 }}>
                {step.n}
              </p>
              <p style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>{step.title}</p>
              <p style={{ fontSize: 15, lineHeight: "22px", color: "var(--text-secondary)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
