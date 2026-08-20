import { ImageResponse } from "next/og";

// Next.js 14.2.3 file convention: this component is picked up automatically
// for the `/opengraph-image` and `og:image`/`twitter:image` meta tags on the
// homepage. No dynamic params here, so the default Node runtime lets Next
// statically generate this once at build time instead of on every request.
export const alt = "HostIA — L'agent vocal IA qui répond au téléphone des restaurants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Tokens copied verbatim from app/globals.css (DA HostIA v3 — "le carnet de
// service", fond clair), not re-derived, so the share preview stays in sync
// with the live site palette.
const PAGE_BG = "#faf6ef";
const PAGE_BG_DEEP = "#f3ecdf";
const CHAMPAGNE = "#a3481c";
const CHAMPAGNE_BRIGHT = "#d9773f";
const TEXT_PRIMARY = "#2b1c10";
const TEXT_SECONDARY = "rgba(43, 28, 16, 0.72)";
const BORDER_ACCENT = "rgba(163, 72, 28, 0.28)";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "96px",
          background: `radial-gradient(120% 120% at 15% 10%, ${PAGE_BG_DEEP} 0%, ${PAGE_BG} 60%)`,
          position: "relative",
        }}
      >
        {/* Diffuse candlelight glow, top-left — echoes the hero treatment. */}
        <div
          style={{
            position: "absolute",
            top: "-220px",
            left: "-160px",
            width: "620px",
            height: "620px",
            borderRadius: "9999px",
            background: `radial-gradient(circle, ${CHAMPAGNE} 0%, rgba(217,119,63,0) 70%)`,
            opacity: 0.22,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: `linear-gradient(135deg, ${CHAMPAGNE_BRIGHT} 0%, ${CHAMPAGNE} 100%)`,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontFamily: "monospace",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: TEXT_SECONDARY,
            }}
          >
            HostIA
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: 1.2,
            color: TEXT_PRIMARY,
            maxWidth: "1000px",
          }}
        >
          L&apos;agent vocal IA qui répond au téléphone des restaurants
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "44px",
            fontSize: "28px",
            color: TEXT_SECONDARY,
            maxWidth: "820px",
          }}
        >
          Réservations prises, équipe notifiée, zéro appel manqué.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "48px",
            padding: "14px 28px",
            borderRadius: "9999px",
            border: `1px solid ${BORDER_ACCENT}`,
            fontSize: "22px",
            color: CHAMPAGNE,
          }}
        >
          Dès 150€/mois · Sans engagement long
        </div>
      </div>
    ),
    { ...size }
  );
}
