import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { Footer } from "@/components/marketing/footer";
import type { ArticleMeta } from "@/lib/seo/articles";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schemas";

/**
 * Coque commune aux 3 articles /ressources/[slug] : nav, en-tête (kicker,
 * titre, date, temps de lecture), colonne de lecture .prose-article, puis
 * footer. Le "ticket" reste réservé aux dispositifs signature (tarifs, hero)
 * — un paragraphe de 600 mots dans un ticket perforé serait illisible, donc
 * ici on assume une colonne de prose classique qui reprend juste la palette
 * et la typo de la DA carnet de service.
 */
export function ArticleShell({ meta, children }: { meta: ArticleMeta; children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={articleSchema({
          slug: meta.slug,
          title: meta.title,
          description: meta.description,
          datePublished: meta.datePublished,
          dateModified: meta.dateModified,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Ressources", path: "/ressources" },
          { name: meta.navTitle, path: `/ressources/${meta.slug}` },
        ])}
      />
      <MarketingNav />
      <main style={{ padding: "0 20px 96px", paddingTop: 160 }}>
        <article style={{ maxWidth: 680, margin: "0 auto" }}>
          <p
            className="font-mono"
            style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 16 }}
          >
            {meta.kicker}
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: "clamp(38px, 5vw, 54px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16, letterSpacing: "-0.02em" }}
          >
            {meta.title}
          </h1>
          <p className="font-mono" style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: 48 }}>
            <time dateTime={meta.datePublished}>
              {new Date(meta.datePublished).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            {" · "}
            {meta.readingTime}
          </p>
          <div className="prose-article">{children}</div>
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--border-subtle)" }}>
            <Link href="/ressources" className="nav-link" style={{ color: "var(--text-secondary)", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>
              ← Retour aux ressources
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
