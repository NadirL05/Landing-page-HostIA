import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { Footer } from "@/components/marketing/footer";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo/schemas";
import { ARTICLES } from "@/lib/seo/articles";

export const metadata: Metadata = {
  title: "Ressources | HostIA",
  description:
    "Articles pour restaurateurs sur la gestion des appels, la prise de réservation et l'organisation du service : coût d'un appel manqué, tactiques pendant le coup de feu, IA vocale vs standardiste humain.",
  alternates: { canonical: "/ressources" },
  openGraph: {
    title: "Ressources HostIA",
    description: "Articles pour restaurateurs sur la gestion des appels et de la réservation.",
    url: `${SITE_URL}/ressources`,
  },
};

export default function RessourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Ressources", path: "/ressources" },
        ])}
      />
      <MarketingNav />
      <main style={{ padding: "0 20px 96px", paddingTop: 160 }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <h1 className="font-serif" style={{ fontSize: "clamp(40px, 6vw, 56px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>
            Ressources
          </h1>
          <p style={{ maxWidth: 560, margin: "0 auto", color: "var(--text-secondary)", fontSize: 16 }}>
            Des articles pratiques sur la gestion des appels et de la réservation en restaurant — pas des fiches produit.
          </p>
        </div>
        <div style={{ maxWidth: 780, margin: "56px auto 0", display: "flex", flexDirection: "column", gap: 20 }}>
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/ressources/${article.slug}`}
              className="material-ultrathin"
              style={{
                display: "block",
                borderRadius: 20,
                padding: "28px 28px",
                textDecoration: "none",
                transition: "transform var(--duration-normal) var(--ease-spring), border-color var(--duration-normal) var(--ease-spring)",
              }}
            >
              <p
                className="font-mono"
                style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 10 }}
              >
                {article.kicker}
              </p>
              <h2
                className="font-serif"
                style={{ fontSize: "clamp(20px, 2.6vw, 26px)", lineHeight: "clamp(26px, 3vw, 32px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, letterSpacing: "-0.01em" }}
              >
                {article.title}
              </h2>
              <p style={{ fontSize: 15, lineHeight: "23px", color: "var(--text-secondary)", marginBottom: 14 }}>{article.excerpt}</p>
              <p className="font-mono" style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{article.readingTime}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
