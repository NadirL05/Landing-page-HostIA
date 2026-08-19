import type { CSSProperties } from "react";
import { SIGNUP_URL, DEMO_URL } from "@/lib/seo/schemas";
import { Hero3D } from "@/components/marketing/hero-scene/hero-3d";

const TICKET_LINES = [
  { k: "TABLE", v: "4 · Terrasse" },
  { k: "COUVERTS", v: "2" },
  { k: "SERVICE", v: "Samedi · 20h00" },
  { k: "NOM", v: "M. Bernard" },
] as const;

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
          background: "radial-gradient(circle, rgba(217,119,63,0.18) 0%, transparent 70%)",
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

        {/*
          Le mock-up hero n'est pas un iPhone avec des bulles de chat — c'est
          un ticket de commande imprimé, posé de guingois comme sur un piquet
          de cuisine, avec le standard (voyant vert clignotant + onde vocale
          en braise) qui l'a rempli en direct. C'est ce visuel, pas une carte
          de dashboard, qui doit dire "restaurant" au premier coup d'œil.
        */}
        <div className="hero-visual" style={{ display: "flex", justifyContent: "center", position: "relative", minWidth: 0 }}>
          {/*
            Guéridon bas-poly posé au sol obsidian, comme aperçu derrière le
            ticket — charge en 3D uniquement une fois le hero visible
            (voir Hero3D), masqué < 900px et sans WebGL.
          */}
          <div className="hero-3d-frame">
            <Hero3D />
          </div>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "-40px",
              borderRadius: 48,
              background: "radial-gradient(60% 60% at 50% 40%, rgba(217,119,63,0.22) 0%, transparent 75%)",
              pointerEvents: "none",
            }}
          />
          <div
            className="hero-stagger ticket-card"
            style={
              {
                width: "100%",
                maxWidth: 300,
                padding: "28px 26px 24px",
                position: "relative",
                zIndex: 1,
                transform: "rotate(-2.5deg)",
                "--stagger-delay": "320ms",
              } as CSSProperties
            }
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <p className="font-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ticket-ink-soft)" }}>
                Appel entrant
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                <span className="switchboard-dot" aria-hidden="true" />
                <span className="font-mono" style={{ fontSize: 10, fontWeight: 700, color: "#1c7a4a", letterSpacing: "0.06em" }}>EN LIGNE</span>
              </span>
            </div>
            <p className="font-mono" style={{ fontSize: 18, fontWeight: 700, color: "var(--color-ticket-ink)", marginBottom: 16, letterSpacing: "-0.01em" }}>
              +33 6 12 34 56 78
            </p>

            <Waveform height={30} opacity={0.85} />

            <hr className="ticket-divider" style={{ margin: "18px 0 14px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {TICKET_LINES.map((line) => (
                <div key={line.k} className="font-mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, lineHeight: "17px" }}>
                  <span style={{ color: "var(--color-ticket-ink-soft)", letterSpacing: "0.03em" }}>{line.k}</span>
                  <span style={{ color: "var(--color-ticket-ink)", fontWeight: 700 }}>{line.v}</span>
                </div>
              ))}
            </div>

            <hr className="ticket-divider" style={{ margin: "14px 0" }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p className="font-mono" style={{ fontSize: 12, fontWeight: 700, color: "var(--color-ticket-ink)", letterSpacing: "0.04em" }}>
                RÉSERVATION
              </p>
              <span
                className="ticket-stamp"
                style={{ padding: "3px 10px", fontSize: 10, fontWeight: 700 }}
              >
                Confirmée
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
