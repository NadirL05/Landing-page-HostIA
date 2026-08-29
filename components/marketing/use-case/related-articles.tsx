import Link from "next/link";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { getArticle } from "@/lib/seo/articles";

/** Liens vers les articles /ressources pertinents pour ce cas d'usage (spec §12). */
export function RelatedArticles({ slugs }: { slugs: readonly string[] }) {
  const articles = slugs.map(getArticle).filter((a): a is NonNullable<typeof a> => Boolean(a));
  if (articles.length === 0) return null;

  return (
    <AnimatedSection style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 600, marginBottom: 24, color: "var(--text-primary)" }}>
          Pour aller plus loin
        </h2>
        <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", margin: 0, padding: 0 }}>
          {articles.map((article) => (
            <li key={article.slug}>
              <Link href={`/ressources/${article.slug}`} className="nav-link" style={{ color: "var(--color-champagne)", fontSize: 16, fontWeight: 500, textDecoration: "none" }}>
                {article.navTitle} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
