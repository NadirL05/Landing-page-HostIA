import { ImageResponse } from "next/og";
import { ARTICLES, getArticle } from "@/lib/seo/articles";

// Audit SEO/GEO 24/08 : sans ce fichier, les 3 articles héritaient de
// app/opengraph-image.tsx (racine) — un partage LinkedIn/X/iMessage d'un
// article affichait visuellement la home, sans différenciation. Même
// palette/structure que l'image racine, kicker + titre de l'article.
export const alt = "HostIA — Ressources";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAGE_BG = "#faf6ef";
const PAGE_BG_DEEP = "#f3ecdf";
const CHAMPAGNE = "#a3481c";
const CHAMPAGNE_BRIGHT = "#d9773f";
const TEXT_PRIMARY = "#2b1c10";
const TEXT_SECONDARY = "rgba(43, 28, 16, 0.72)";
const BORDER_ACCENT = "rgba(163, 72, 28, 0.28)";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export default function ArticleOpengraphImage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  const title = article?.title ?? "HostIA — Ressources";
  const kicker = article?.kicker ?? "Ressources";

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
            marginBottom: "28px",
            padding: "10px 22px",
            borderRadius: "9999px",
            border: `1px solid ${BORDER_ACCENT}`,
            fontSize: "20px",
            color: CHAMPAGNE,
          }}
        >
          {kicker}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: 1.25,
            color: TEXT_PRIMARY,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}
