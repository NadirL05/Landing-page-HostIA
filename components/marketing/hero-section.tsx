import { SIGNUP_URL, DEMO_URL } from "@/lib/seo/schemas";

const CHAT_MESSAGES = [
  { from: "ai" as const, text: "Bonsoir, restaurant Le Cèdre, HostIA à votre service — comment puis-je vous aider ?" },
  { from: "user" as const, text: "Bonsoir, je voudrais réserver pour samedi soir, 2 personnes à 20h." },
  { from: "ai" as const, text: "Parfait ! Je confirme : samedi, 2 couverts à 20h. Votre nom ?" },
];

export function HeroSection() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,146,46,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="hero-grid" style={{ maxWidth: 1120, margin: "0 auto", padding: "160px 20px 96px", display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }}>
        <div style={{ maxWidth: 680 }}>
          <p className="font-mono" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 24 }}>
            Agent vocal IA · Restaurants indépendants
          </p>
          <h1 className="font-serif" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: "clamp(48px, 7vw, 72px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 24, letterSpacing: "-0.5px" }}>
            HostIA — l&rsquo;agent vocal IA qui répond au téléphone de votre restaurant
          </h1>
          <p style={{ fontSize: 16, lineHeight: "23px", color: "var(--text-secondary)", maxWidth: 600, marginBottom: 40 }}>
            HostIA est un agent vocal en français qui décroche le téléphone d&rsquo;un restaurant indépendant, prend la réservation, la reformule pour éviter toute erreur, envoie un lien d&rsquo;acompte par SMS et notifie l&rsquo;équipe en salle — sans mobiliser personne pendant le service.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={SIGNUP_URL} className="btn-primary">Essayer HostIA</a>
            <a href={DEMO_URL} className="btn-secondary">Écouter la démo interactive</a>
          </div>
        </div>

        <div className="hero-visual" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "-40px",
              borderRadius: 48,
              background: "radial-gradient(60% 60% at 50% 40%, rgba(184,146,46,0.18) 0%, transparent 75%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ width: 300, borderRadius: 40, background: "linear-gradient(165deg, #1f1710 0%, #140d06 100%)", border: "1px solid rgba(160,120,48,0.24)", padding: 24, boxShadow: "0 32px 96px rgba(26,18,9,0.24), 0 4px 16px rgba(26,18,9,0.12)", position: "relative" }}>
            <div style={{ width: 80, height: 6, background: "rgba(255,255,255,0.15)", borderRadius: 3, margin: "0 auto 20px" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 20 }}>
              <span className="hero-live-dot" aria-hidden="true" />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>Appel entrant</p>
                <p style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>+33 6 12 34 56 78</p>
              </div>
            </div>
            {CHAT_MESSAGES.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.from === "ai" ? "flex-start" : "flex-end", marginBottom: 10 }}>
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "8px 12px",
                    borderRadius: msg.from === "ai" ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                    background: msg.from === "ai" ? "rgba(255,255,255,0.08)" : "var(--gradient-premium)",
                    color: msg.from === "ai" ? "#fff" : "#1a1209",
                    fontSize: 12,
                    lineHeight: "16px",
                    fontWeight: msg.from === "user" ? 500 : 400,
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
