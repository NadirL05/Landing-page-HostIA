import type { Metadata } from "next";
import Link from "next/link";
import { APP_URL, CALENDLY_URL, PRICING_TIERS } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Plans and pricing | HostIA",
  description: "Compare all HostIA plans: Simple €150/month, Medium €350/month and Luxe €650/month. Full feature comparison and monthly billing details.",
  alternates: { canonical: "/en/pricing" },
  openGraph: { title: "Plans and pricing | HostIA", description: "Find the right level of phone support for your restaurant.", url: "/en/pricing", locale: "en_GB" },
  twitter: { title: "Plans and pricing | HostIA", description: "Compare Simple, Medium and Luxe. From €150/month." },
};

const descriptions = {
  simple: "A welcoming voice for every reservation. Keep your team focused on the dining room.",
  medium: "Keep reservations organised with deposit links and support for changes and cancellations.",
  luxe: "Support busy services with simultaneous calls and orders for groups, events and catering.",
};
const features = [
  { name: "Phone reservations in French", from: 0 },
  { name: "Reservation details repeated before confirmation", from: 0 },
  { name: "Team notifications", from: 0 },
  { name: "Automatic deposit link sent by SMS", from: 1 },
  { name: "Reservation changes and cancellations", from: 1 },
  { name: "Simultaneous calls", from: 2 },
  { name: "Order taking for groups, events and catering", from: 2 },
];

export default function EnglishPricingPage() {
  return (
    <div lang="en" className="pricing-details-page">
      <header className="details-nav">
        <Link href="/" className="font-serif" aria-label="HostIA home (French)">HostIA</Link>
        <Link href="/pricing" hrefLang="fr" className="nav-link">Tarifs en français</Link>
      </header>
      <main className="details-main">
        <div className="details-intro">
          <p className="section-eyebrow">A little more calm. A warmer welcome.</p>
          <h1 className="font-serif">The right support<br />for your restaurant.</h1>
          <p>Three monthly plans, with every detail in one place. Choose the support your team needs and give your guests your full attention.</p>
          <a href="#compare" className="btn-secondary">Compare all features</a>
        </div>
        <section aria-label="Monthly plans" className="details-plan-grid">
          {PRICING_TIERS.map((tier, index) => (
            <article key={tier.key} className={`pricing-card material-ultrathin ${index === 1 ? "pricing-card--featured" : ""}`}>
              {index === 1 ? <span className="pricing-badge">Most popular</span> : null}
              <h2>{tier.name}</h2>
              <p className="details-price"><strong className="font-serif">€{tier.price}</strong> / month</p>
              <p>{descriptions[tier.key]}</p>
              <ul>{features.filter(feature => feature.from <= index).map(feature => <li key={feature.name}>{feature.name}</li>)}</ul>
              <a className={index === 1 ? "btn-primary" : "btn-secondary"} href={`${APP_URL}/api/stripe/checkout-public?tier=${tier.key}`}>Choose {tier.name}</a>
            </article>
          ))}
        </section>
        <section id="compare" className="details-comparison">
          <p className="section-eyebrow">Every feature, clearly explained</p>
          <h2 className="font-serif">Compare your options</h2>
          <div className="comparison-scroll" role="region" aria-label="Plan comparison, scroll horizontally on small screens" tabIndex={0}>
            <table>
              <caption>Features included in each monthly plan</caption>
              <thead><tr><th scope="col">Included features</th>{PRICING_TIERS.map(tier => <th scope="col" key={tier.key}>{tier.name}<span>€{tier.price}/month</span></th>)}</tr></thead>
              <tbody>{features.map(feature => <tr key={feature.name}><th scope="row">{feature.name}</th>{PRICING_TIERS.map((tier, index) => <td key={tier.key}>{index >= feature.from ? <span className="feature-included">Included</span> : "Not included"}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </section>
        <section className="details-terms" aria-labelledby="billing-title">
          <div><p className="section-eyebrow">Simple from the start</p><h2 id="billing-title" className="font-serif">How billing works</h2><p>Prices are in euros, billed monthly. Your plan is based on the features you need, not the number of users.</p></div>
          <dl>
            <div><dt>Flexible subscription</dt><dd>No long-term commitment. Cancel at any time.</dd></div>
            <div><dt>No setup fee</dt><dd>No separate setup charge and no annual plan.</dd></div>
            <div><dt>No minute quota</dt><dd>Plans are not sold with a monthly minute allowance.</dd></div>
            <div><dt>No reservation commission</dt><dd>HostIA does not charge a fee on each reservation.</dd></div>
          </dl>
        </section>
        <section className="details-help">
          <h2 className="font-serif">Let’s find your fit.</h2>
          <p>Tell us about your service, your calls and your team. We will help you choose a plan and confirm any billing or tax questions before you subscribe.</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a 30-minute call</a>
          <p className="details-language-note">HostIA answers restaurant calls in French. This page explains our plans in English.</p>
        </section>
      </main>
      <footer className="details-footer">© {new Date().getFullYear()} HostIA <Link href="/mentions-legales" hrefLang="fr">Legal notice (French)</Link><Link href="/confidentialite" hrefLang="fr">Privacy policy (French)</Link></footer>
    </div>
  );
}
