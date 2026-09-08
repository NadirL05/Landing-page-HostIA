import type { Metadata } from "next";
import Link from "next/link";
import { APP_URL, CALENDLY_URL, PRICING_TIERS } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Détail des tarifs | HostIA",
  description: "Comparez les formules HostIA : Simple à 150 €/mois, Medium à 350 €/mois et Luxe à 650 €/mois. Toutes les fonctionnalités et les modalités de facturation.",
  alternates: { canonical: "/pricing/details" },
  openGraph: { title: "Détail des tarifs | HostIA", description: "Choisissez la formule adaptée aux appels de votre restaurant.", url: "/pricing/details", locale: "fr_FR" },
  twitter: { title: "Détail des tarifs | HostIA", description: "Comparez Simple, Medium et Luxe. Dès 150 €/mois." },
};

const descriptions = {
  simple: "Un accueil attentionné pour chaque réservation. Votre équipe reste disponible en salle.",
  medium: "Gérez vos réservations avec les liens d’acompte et la prise en charge des modifications et annulations.",
  luxe: "Gérez les services chargés avec les appels simultanés et les commandes pour les groupes, les événements et le traiteur.",
};
const features = [
  { name: "Prise de réservation par téléphone en français", from: 0 },
  { name: "Reformulation des détails avant validation", from: 0 },
  { name: "Notification de l’équipe", from: 0 },
  { name: "Lien d’acompte automatique envoyé par SMS", from: 1 },
  { name: "Modifications et annulations des réservations", from: 1 },
  { name: "Appels simultanés", from: 2 },
  { name: "Prise de commande pour les groupes, événements et traiteur", from: 2 },
];

export default function PricingDetailsPage() {
  return (
    <div lang="fr" className="pricing-details-page">
      <header className="details-nav">
        <Link href="/" className="font-serif" aria-label="Accueil HostIA">HostIA</Link>
        <Link href="/pricing" hrefLang="fr" className="nav-link">Retour aux tarifs</Link>
      </header>
      <main className="details-main">
        <div className="details-intro">
          <p className="section-eyebrow">Plus de sérénité. Un accueil chaleureux.</p>
          <h1 className="font-serif">La bonne formule<br />pour votre restaurant.</h1>
          <p>Trois formules mensuelles, avec tous les détails au même endroit. Choisissez celle qui répond aux besoins de votre équipe et gardez toute votre attention pour vos clients.</p>
          <a href="#compare" className="btn-secondary">Comparer les fonctionnalités</a>
        </div>
        <section aria-label="Formules mensuelles" className="details-plan-grid">
          {PRICING_TIERS.map((tier, index) => (
            <article key={tier.key} className={`pricing-card material-ultrathin ${index === 1 ? "pricing-card--featured" : ""}`}>
              {index === 1 ? <span className="pricing-badge">Le plus choisi</span> : null}
              <h2>{tier.name}</h2>
              <p className="details-price"><strong className="font-serif">{tier.price} €</strong> / mois</p>
              <p>{descriptions[tier.key]}</p>
              <ul>{features.filter(feature => feature.from <= index).map(feature => <li key={feature.name}>{feature.name}</li>)}</ul>
              <a className={index === 1 ? "btn-primary" : "btn-secondary"} href={`${APP_URL}/api/stripe/checkout-public?tier=${tier.key}`}>Choisir {tier.name}</a>
            </article>
          ))}
        </section>
        <section id="compare" className="details-comparison">
          <p className="section-eyebrow">Chaque fonctionnalité, en détail</p>
          <h2 className="font-serif">Comparez les formules</h2>
          <div className="comparison-scroll" role="region" aria-label="Comparatif des formules, faites défiler horizontalement sur les petits écrans" tabIndex={0}>
            <table>
              <caption>Fonctionnalités incluses dans chaque formule mensuelle</caption>
              <thead><tr><th scope="col">Fonctionnalités incluses</th>{PRICING_TIERS.map(tier => <th scope="col" key={tier.key}>{tier.name}<span>{tier.price} €/mois</span></th>)}</tr></thead>
              <tbody>{features.map(feature => <tr key={feature.name}><th scope="row">{feature.name}</th>{PRICING_TIERS.map((tier, index) => <td key={tier.key}>{index >= feature.from ? <span className="feature-included">Inclus</span> : "Non inclus"}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>
        <section className="details-terms" aria-labelledby="billing-title">
          <div><p className="section-eyebrow">Simple dès le départ</p><h2 id="billing-title" className="font-serif">Comment fonctionne la facturation</h2><p>Les prix sont en euros et la facturation est mensuelle. Le tarif dépend des fonctionnalités choisies, pas du nombre d’utilisateurs.</p></div>
          <dl>
            <div><dt>Abonnement flexible</dt><dd>Sans engagement à long terme. Annulez à tout moment.</dd></div>
            <div><dt>Aucun frais de mise en place</dt><dd>Pas de frais de mise en place ni de formule annuelle.</dd></div>
            <div><dt>Aucun quota de minutes</dt><dd>Les formules ne sont pas limitées à un forfait mensuel de minutes.</dd></div>
            <div><dt>Aucune commission sur les réservations</dt><dd>HostIA ne prélève pas de frais sur chaque réservation.</dd></div>
          </dl>
        </section>
        <section className="details-help">
          <h2 className="font-serif">Trouvons la formule qui vous convient.</h2>
          <p>Parlez-nous de votre service, de vos appels et de votre équipe. Nous vous aiderons à choisir votre formule et à clarifier la facturation et les taxes avant votre abonnement.</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Réserver un appel de 30 minutes</a>
          <p className="details-language-note">HostIA répond aux appels de votre restaurant en français.</p>
        </section>
      </main>
      <footer className="details-footer">© {new Date().getFullYear()} HostIA <Link href="/mentions-legales" hrefLang="fr">Mentions légales</Link><Link href="/confidentialite" hrefLang="fr">Politique de confidentialité</Link></footer>
    </div>
  );
}
