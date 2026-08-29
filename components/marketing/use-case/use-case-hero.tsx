import Link from "next/link";
import type { UseCaseMeta } from "@/lib/seo/use-cases";

/**
 * Hero compact des pages cas d'usage — même grammaire que HeroSection
 * (kicker mono + H1 serif + deck + CTA pill) sans le dispositif ticket/3D
 * du hero home, réservé à la page d'accueil. Fil d'Ariane texte ajouté ici :
 * absent ailleurs sur le site (seul un BreadcrumbList JSON-LD existait),
 * mais utile sur des pages profondes d'un niveau sous l'accueil.
 */
export function UseCaseHero({ meta }: { meta: UseCaseMeta }) {
  return (
    <div style={{ padding: "160px 20px 72px", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: 20 }}>
          <ol style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", margin: 0, padding: 0, fontSize: 13, color: "var(--text-tertiary)" }}>
            <li>
              <Link href="/" className="nav-link" style={{ color: "var(--text-tertiary)", textDecoration: "none" }}>
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--text-secondary)" }}>
              {meta.navTitle}
            </li>
          </ol>
        </nav>

        <p className="font-mono" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 20 }}>
          {meta.kicker}
        </p>
        <h1
          className="font-serif"
          style={{ fontSize: "clamp(36px, 5.5vw, 60px)", lineHeight: "clamp(42px, 6vw, 66px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20, letterSpacing: "-0.02em" }}
        >
          {meta.h1}
        </h1>
        <p style={{ fontSize: 17, lineHeight: "26px", color: "var(--text-secondary)", maxWidth: 640, marginBottom: 36 }}>{meta.deck}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={meta.ctaPrimaryHref} className="btn-primary">
            {meta.ctaPrimaryLabel}
          </a>
          <a href={meta.ctaSecondaryHref} className="btn-secondary">
            {meta.ctaSecondaryLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
