import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { Footer } from "@/components/marketing/footer";

// Next.js émet déjà `<meta name="robots" content="noindex">` sur une 404 :
// `robots: null` évite une seconde balise (le `index, follow` hérité du
// layout). `alternates: null` retire la canonical vers l'accueil héritée du
// layout, sans objet sur une page d'erreur (QA SEO du 26/10/2026, même
// correction que sur fonciable.fr).
export const metadata: Metadata = {
  title: "Page introuvable | HostIA",
  robots: null,
  alternates: null,
};

export default function NotFound() {
  return (
    <>
      <MarketingNav />
      <main style={{ padding: "0 20px 96px", paddingTop: 160 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            className="font-mono"
            style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-champagne)", marginBottom: 12 }}
          >
            Erreur 404
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}
          >
            Page introuvable
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: 680 }}>
            L&apos;adresse a peut-être changé.{" "}
            <Link
              href="/"
              style={{ color: "var(--color-champagne)", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              Revenir à l&apos;accueil de HostIA
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
