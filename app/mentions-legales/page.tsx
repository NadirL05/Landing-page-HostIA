import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { Footer } from "@/components/marketing/footer";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Mentions légales | HostIA",
  description:
    "Mentions légales du site hostia.agentimpact.fr : éditeur, hébergeur, propriété intellectuelle et contact.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mentions légales | HostIA",
    description: "Éditeur, hébergeur, propriété intellectuelle et contact.",
    url: `${SITE_URL}/mentions-legales`,
  },
};

const rowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 12rem) 1fr",
  gap: 12,
  padding: "12px 0",
  borderBottom: "1px dashed rgba(43, 28, 16, 0.22)",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--color-ticket-ink-soft)",
};

const valueStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.6,
  color: "var(--color-ticket-ink)",
};

function LegalRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={rowStyle}>
      <dt style={labelStyle}>{label}</dt>
      <dd style={{ ...valueStyle, margin: 0 }}>{children}</dd>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  color: "var(--color-champagne)",
  textDecoration: "underline",
  textUnderlineOffset: 3,
};

const paragraphStyle: React.CSSProperties = {
  maxWidth: 680,
  fontSize: 15,
  lineHeight: 1.75,
  color: "var(--text-secondary)",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 56 }}>
      <h2
        className="font-serif"
        style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Mentions légales", path: "/mentions-legales" },
        ])}
      />
      <MarketingNav />
      <main style={{ padding: "0 20px 96px", paddingTop: 160 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            className="font-mono"
            style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-champagne)", marginBottom: 12 }}
          >
            Informations légales
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}
          >
            Mentions légales
          </h1>
          <p style={{ fontSize: 14, color: "var(--text-tertiary)" }}>
            Dernière mise à jour : 20 août 2026
          </p>

          <Section title="1. Éditeur du site">
            <div className="ticket-card" style={{ padding: "8px 24px", marginTop: 8 }}>
              <dl style={{ margin: 0 }}>
                <LegalRow label="Raison sociale">LAHYANI NADIR</LegalRow>
                <LegalRow label="Nom commercial">AgentImpact / HostIA</LegalRow>
                <LegalRow label="Forme juridique">Entrepreneur individuel</LegalRow>
                <LegalRow label="Siège">200 rue de la Croix Nivert, 75015 Paris, France</LegalRow>
                <LegalRow label="SIREN">942 311 333</LegalRow>
                <LegalRow label="SIRET">942 311 333 00010</LegalRow>
                <LegalRow label="TVA intracommunautaire">FR58942311333</LegalRow>
                <LegalRow label="Immatriculation">RCS Paris, le 21/03/2025</LegalRow>
                <LegalRow label="Code NAF / APE">
                  7490B — Activités spécialisées, scientifiques et techniques diverses
                </LegalRow>
                <LegalRow label="Contact">
                  <a href="mailto:nadir.lahyani@agentimpact.fr" style={linkStyle}>
                    nadir.lahyani@agentimpact.fr
                  </a>
                </LegalRow>
              </dl>
            </div>
            <p style={paragraphStyle}>
              HostIA est un produit édité par AgentImpact, activité exercée par LAHYANI NADIR
              (entrepreneur individuel ci-dessus). Site AgentImpact :{" "}
              <a href="https://agentimpact.fr" style={linkStyle} target="_blank" rel="noopener noreferrer">
                agentimpact.fr
              </a>
              .
            </p>
          </Section>

          <Section title="2. Hébergeur">
            <p style={paragraphStyle}>
              Le site hostia.agentimpact.fr est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis. Site web :{" "}
              <a href="https://vercel.com" style={linkStyle} target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
              .
            </p>
          </Section>

          <Section title="3. Propriété intellectuelle">
            <p style={paragraphStyle}>
              L&rsquo;ensemble des contenus présents sur ce site (textes, visuels, logos, structure,
              éléments graphiques et logiciels) est la propriété exclusive de LAHYANI NADIR, sauf
              mention contraire. Toute reproduction, représentation, adaptation ou exploitation,
              totale ou partielle, sans autorisation écrite préalable, est interdite et constitue
              une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété
              intellectuelle.
            </p>
          </Section>

          <Section title="4. Responsabilité">
            <p style={paragraphStyle}>
              Les informations publiées sur ce site sont fournies à titre indicatif et peuvent être
              modifiées à tout moment. L&rsquo;éditeur met tout en œuvre pour en assurer l&rsquo;exactitude,
              sans pouvoir en garantir l&rsquo;exhaustivité. Les liens vers des sites tiers (Stripe,
              Calendly) sont proposés à titre de commodité : leur contenu n&rsquo;engage pas la
              responsabilité de l&rsquo;éditeur.
            </p>
          </Section>

          <Section title="5. Données personnelles et cookies">
            <p style={paragraphStyle}>
              Le traitement de vos données personnelles est détaillé dans notre{" "}
              <Link href="/confidentialite" style={linkStyle}>
                politique de confidentialité
              </Link>
              .
            </p>
          </Section>

          <Section title="6. Droit applicable">
            <p style={paragraphStyle}>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et à
              défaut de résolution amiable, les tribunaux français sont seuls compétents.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
