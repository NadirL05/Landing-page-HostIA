import type { CSSProperties } from "react";
import { SIGNUP_URL, DEMO_URL } from "@/lib/seo/schemas";

const CHAT_MESSAGES = [
  { from: "ai" as const, text: "Bonsoir, restaurant Le Cèdre, HostIA à votre service — comment puis-je vous aider ?" },
  { from: "user" as const, text: "Bonsoir, je voudrais réserver pour samedi soir, 2 personnes à 20h." },
  { from: "ai" as const, text: "Parfait ! Je confirme : samedi, 2 couverts à 20h. Votre nom ?" },
];

// Motif "onde vocale" déterministe (pas de Math.random : même sortie à
// chaque rendu serveur, aucun aléa à figer pour les tests visuels).
const WAVEFORM_BARS = Array.from({ length: 48 }, (_, i) => {
  const wave = Math.abs(Math.sin(i * 0.45)) * 0.7 + Math.abs(Math.cos(i * 0.21)) * 0.3;
  return {
    max: 0.28 + wave * 0.72,
    delay: (i % 12) * 0.11,
  };
});

function Waveform({ height, opacity }: { height: number; opacity: number }) {
  return (
    <div className="waveform" aria-hidden="true" style={{ height, opacity }}>
      {WAVEFORM_BARS.map((bar, i) => (
        <span
          key={i}
          className="waveform-bar"
          style={
            {
              "--wf-max": bar.max,
              "--wf-min": 0.16,
              "--wf-delay": `${bar.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "var(--color-obsidian)" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -160,
          right: -120,
          width: 720,
          height: 720,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Onde vocale structurelle : plein bleed, posée sous le titre comme
          la ligne de basse du hero — pas une image, pas un accent isolé. */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center" }}>
        <Waveform height={120} opacity={0.16} />
      </div>

      <div
        className="hero-grid"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "176px 20px 120px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <p
            className="font-mono hero-stagger"
            style={
              {
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "var(--color-champagne)",
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
                gap: 10,
                "--stagger-delay": "0ms",
              } as CSSProperties
            }
          >
            <span className="hero-live-dot" aria-hidden="true" />
            Agent vocal IA · Restaurants indépendants · Toujours en ligne
          </p>

          {/* H1 = élément LCP : aucune entrance animation, peint immédiatement. */}
          <h1
            className="font-serif"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: "var(--text-display-line)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 28,
              letterSpacing: "-0.03em",
            }}
          >
            Le téléphone sonne.
            <br />
            HostIA <span className="hero-highlight">répond</span>.
          </h1>

          <p
            className="hero-stagger"
            style={
              {
                fontSize: 17,
                lineHeight: "26px",
                color: "var(--text-secondary)",
                maxWidth: 600,
                marginBottom: 40,
                "--stagger-delay": "140ms",
              } as CSSProperties
            }
          >
            HostIA est un agent vocal en français qui décroche le téléphone d&rsquo;un restaurant indépendant, prend la réservation, la reformule pour éviter toute erreur, envoie un lien d&rsquo;acompte par SMS et notifie l&rsquo;équipe en salle — 24 h/24, sans mobiliser personne pendant le service.
          </p>
          <div
            className="hero-stagger"
            style={{ display: "flex", gap: 12, flexWrap: "wrap", "--stagger-delay": "240ms" } as CSSProperties}
          >
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
              background: "radial-gradient(60% 60% at 50% 40%, rgba(212,175,55,0.22) 0%, transparent 75%)",
              pointerEvents: "none",
            }}
          />
          <div
            className="hero-stagger"
            style={
              {
                width: 300,
                borderRadius: 40,
                background: "linear-gradient(165deg, #14100a 0%, #050505 100%)",
                border: "1px solid rgba(197,160,89,0.28)",
                padding: 24,
                boxShadow: "0 40px 120px rgba(0,0,0,0.55), 0 0 64px rgba(212,175,55,0.08)",
                position: "relative",
                transform: "rotate(-2.5deg)",
                "--stagger-delay": "320ms",
              } as CSSProperties
            }
          >
            <div style={{ width: 80, height: 6, background: "rgba(255,255,255,0.15)", borderRadius: 3, margin: "0 auto 20px" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>Appel entrant</p>
                <p style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>+33 6 12 34 56 78</p>
              </div>
            </div>
            <Waveform height={28} opacity={0.9} />
            <div style={{ marginTop: 16 }}>
              {CHAT_MESSAGES.map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.from === "ai" ? "flex-start" : "flex-end", marginBottom: 10 }}>
                  <div
                    style={{
                      maxWidth: "80%",
                      padding: "8px 12px",
                      borderRadius: msg.from === "ai" ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                      background: msg.from === "ai" ? "rgba(255,255,255,0.08)" : "var(--gradient-premium)",
                      color: msg.from === "ai" ? "#fff" : "#050505",
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
    </div>
  );
}
