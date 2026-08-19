import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { Footer } from "@/components/marketing/footer";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Politique de confidentialité | HostIA",
  description:
    "Comment hostia.agentimpact.fr collecte, utilise et protège vos données personnelles, conformément au RGPD.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Politique de confidentialité | HostIA",
    description: "Données collectées, sous-traitants, durées de conservation, vos droits RGPD.",
    url: `${SITE_URL}/confidentialite`,
  },
};

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

interface ProcessingRow {
  purpose: string;
  data: string;
  legalBasis: string;
  retention: string;
}

const PROCESSINGS: readonly ProcessingRow[] = [
  {
    purpose: "Prise de réservation via l'agent vocal HostIA",
    data:
      "Numéro de téléphone appelant, contenu de la conversation (traité pour comprendre et reformuler la demande), nom, nombre de couverts, date et heure de réservation, table attribuée",
    legalBasis: "Exécution du contrat conclu entre HostIA et le restaurant client",
    retention: "Durée de la réservation puis 3 ans à des fins de preuve commerciale",
  },
  {
    purpose: "Envoi du lien d'acompte par SMS (plans Medium et Luxe)",
    data: "Numéro de téléphone, montant de l'acompte, statut du paiement (via Stripe)",
    legalBasis: "Exécution du contrat, à la demande du client final",
    retention: "3 ans à compter de la transaction",
  },
  {
    purpose: "Notification de l'équipe du restaurant",
    data: "Détails de la réservation transmis à l'équipe en salle (nom, couverts, horaire)",
    legalBasis: "Exécution du contrat conclu avec le restaurant",
    retention: "Durée du contrat entre HostIA et le restaurant",
  },
  {
    purpose: "Prise de rendez-vous pour une démonstration",
    data: "Nom, adresse e-mail, créneau choisi, informations renseignées dans Calendly",
    legalBasis: "Mesures précontractuelles à la demande de la personne",
    retention: "3 ans à compter du dernier contact",
  },
  {
    purpose: "Mesure d'audience du site vitrine",
    data: "Pages consultées, durée de visite, données techniques anonymisées (Vercel Analytics, Speed Insights)",
    legalBasis: "Intérêt légitime à mesurer et améliorer l'audience du site",
    retention: "13 mois maximum",
  },
];

const PROCESSORS: readonly { name: string; role: string }[] = [
  {
    name: "Vercel Inc.",
    role: "Hébergement du site, mesure d'audience (Vercel Analytics) et de performance (Speed Insights)",
  },
  {
    name: "Stripe Payments Europe, Ltd.",
    role: "Traitement des paiements et acomptes de réservation",
  },
  {
    name: "Calendly LLC",
    role: "Prise de rendez-vous en ligne pour les démonstrations",
  },
];

const RIGHTS: readonly string[] = [
  "Droit d'accès à vos données",
  "Droit de rectification des données inexactes",
  "Droit à l'effacement (« droit à l'oubli »)",
  "Droit à la limitation du traitement",
  "Droit d'opposition, notamment au traitement fondé sur l'intérêt légitime",
  "Droit à la portabilité de vos données",
];

export default function ConfidentialitePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Politique de confidentialité", path: "/confidentialite" },
        ])}
      />
      <MarketingNav />
      <main style={{ padding: "0 20px 96px", paddingTop: 160 }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            className="font-mono"
            style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-champagne)", marginBottom: 12 }}
          >
            Protection des données
          </p>
          <h1
            className="font-serif"
            style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}
          >
            Politique de confidentialité
          </h1>
          <p style={{ fontSize: 14, color: "var(--text-tertiary)" }}>
            Dernière mise à jour : 20 août 2026
          </p>

          <Section title="1. Responsable du traitement">
            <p style={paragraphStyle}>
              Le responsable du traitement des données collectées via HostIA (site
              hostia.agentimpact.fr et service d&rsquo;agent vocal) est LAHYANI NADIR, entrepreneur
              individuel, 200 rue de la Croix Nivert, 75015 Paris. Pour toute question relative à
              vos données, écrivez à{" "}
              <a href="mailto:nadir.lahyani@agentimpact.fr" style={linkStyle}>
                nadir.lahyani@agentimpact.fr
              </a>
              .
            </p>
          </Section>

          <Section title="2. Données collectées, finalités, bases légales et durées de conservation">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {PROCESSINGS.map((row) => (
                <div key={row.purpose} className="ticket-card" style={{ padding: "20px 24px" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-ticket-ink)", marginBottom: 12 }}>
                    {row.purpose}
                  </h3>
                  <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div>
                      <dt
                        className="font-mono"
                        style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ticket-ink-soft)" }}
                      >
                        Données
                      </dt>
                      <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--color-ticket-ink)" }}>{row.data}</dd>
                    </div>
                    <div>
                      <dt
                        className="font-mono"
                        style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ticket-ink-soft)" }}
                      >
                        Base légale
                      </dt>
                      <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--color-ticket-ink)" }}>{row.legalBasis}</dd>
                    </div>
                    <div>
                      <dt
                        className="font-mono"
                        style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-ticket-ink-soft)" }}
                      >
                        Conservation
                      </dt>
                      <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--color-ticket-ink)" }}>{row.retention}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <p style={paragraphStyle}>
              Aucune donnée n&rsquo;est vendue, louée ou cédée à des tiers à des fins commerciales.
            </p>
          </Section>

          <Section title="3. Destinataires et sous-traitants">
            <p style={paragraphStyle}>
              Vos données sont traitées par LAHYANI NADIR (AgentImpact / HostIA) et par les
              prestataires techniques strictement nécessaires au fonctionnement du service :
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: 0, listStyle: "none" }}>
              {PROCESSORS.map((processor) => (
                <li
                  key={processor.name}
                  className="ticket-card"
                  style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-ticket-ink)" }}>{processor.name}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.6, color: "var(--color-ticket-ink-soft)" }}>{processor.role}</span>
                </li>
              ))}
            </ul>
            <p style={paragraphStyle}>
              Ces prestataires peuvent traiter des données en dehors de l&rsquo;Union européenne
              (notamment Vercel et Stripe, sociétés américaines). Ces transferts sont encadrés par
              les garanties prévues par le RGPD (clauses contractuelles types de la Commission
              européenne ou décision d&rsquo;adéquation). L&rsquo;hébergement Vercel repose sur une
              infrastructure principalement située aux États-Unis, avec des régions Europe
              disponibles selon la configuration du déploiement ; le site n&rsquo;est pas hébergé
              exclusivement en France.
            </p>
          </Section>

          <Section title="4. Cookies et mesure d'audience">
            <p style={paragraphStyle}>
              Le site utilise des cookies strictement nécessaires à son fonctionnement, ainsi
              qu&rsquo;une mesure d&rsquo;audience limitée à l&rsquo;amélioration du site (Vercel
              Analytics, Speed Insights). Ces mesures ne servent ni à la publicité ciblée ni au
              profilage. Vous pouvez configurer votre navigateur pour refuser tout ou partie des
              cookies.
            </p>
            <p style={paragraphStyle}>
              Le module de prise de rendez-vous est fourni par Calendly et n&rsquo;est chargé que
              lorsque vous cliquez sur un lien de réservation de démonstration. Il dépose ses propres
              traceurs, soumis à la politique de confidentialité de son éditeur. Le paiement de
              l&rsquo;abonnement ou de l&rsquo;acompte de réservation est traité par Stripe, qui peut
              également déposer ses propres cookies techniques.
            </p>
          </Section>

          <Section title="5. Sécurité">
            <p style={paragraphStyle}>
              Les données sont hébergées sur des infrastructures sécurisées, les échanges sont
              chiffrés (HTTPS) et les accès sont limités aux seules personnes qui en ont besoin. Les
              paiements ne transitent jamais par nos serveurs : ils sont traités directement par
              Stripe.
            </p>
          </Section>

          <Section title="6. Vos droits">
            <p style={paragraphStyle}>
              Conformément au Règlement général sur la protection des données (RGPD) et à la loi «
              Informatique et Libertés », vous disposez des droits suivants :
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8, padding: 0, margin: 0, listStyle: "none" }}>
              {RIGHTS.map((right) => (
                <li key={right} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span
                    aria-hidden="true"
                    style={{ marginTop: 8, width: 4, height: 4, borderRadius: "50%", background: "var(--color-champagne)", flexShrink: 0 }}
                  />
                  <span style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)" }}>{right}</span>
                </li>
              ))}
            </ul>
            <p style={paragraphStyle}>
              Pour exercer ces droits, écrivez à{" "}
              <a href="mailto:nadir.lahyani@agentimpact.fr" style={linkStyle}>
                nadir.lahyani@agentimpact.fr
              </a>
              . Une réponse vous sera apportée dans un délai maximum d&rsquo;un mois. Si vous estimez,
              après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser
              une réclamation à la CNIL (
              <a href="https://www.cnil.fr" style={linkStyle} target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>
              ).
            </p>
          </Section>

          <Section title="7. Modifications">
            <p style={paragraphStyle}>
              Cette politique peut être mise à jour pour refléter les évolutions du service ou de la
              réglementation. La date de dernière mise à jour figure en haut de cette page. Les{" "}
              <Link href="/mentions-legales" style={linkStyle}>
                mentions légales
              </Link>{" "}
              complètent le présent document.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
