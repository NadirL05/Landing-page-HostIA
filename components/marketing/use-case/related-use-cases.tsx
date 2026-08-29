import Link from "next/link";
import { AnimatedSection } from "@/components/marketing/animated-section";
import type { UseCaseMeta } from "@/lib/seo/use-cases";

/** Maillage entre les 3 pages cas d'usage (spec §12 "entre les nouvelles pages"). */
export function RelatedUseCases({ items }: { items: readonly UseCaseMeta[] }) {
  return (
    <AnimatedSection style={{ padding: "0 20px", paddingBottom: "var(--space-section-y)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 600, marginBottom: 24, color: "var(--text-primary)" }}>
          Les autres cas d&rsquo;usage HostIA
        </h2>
        <div className="use-case-related-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
          {items.map((item) => (
            <Link
              key={item.slug}
              href={item.path}
              className="material-ultrathin"
              style={{ display: "block", borderRadius: 16, padding: "22px 24px", textDecoration: "none", transition: "transform var(--duration-normal) var(--ease-spring)" }}
            >
              <p className="font-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-champagne)", marginBottom: 8 }}>
                {item.kicker}
              </p>
              <p style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", lineHeight: "22px" }}>{item.h1}</p>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
