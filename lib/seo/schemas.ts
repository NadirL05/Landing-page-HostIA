/**
 * Contenu et schemas JSON-LD. Données réelles uniquement — tarifs
 * confirmés le 18/08/2026 (150/350/650€/mois simple, pas de quota
 * minutes, pas de setup fee, pas d'offre annuelle : ancienne version de
 * ce repo — mai 2026 — avait un autre modèle, non retenu).
 */

export const SITE_URL = "https://hostia.agentimpact.fr";

/** URL de l'app HostIA réelle (repo restauyacine), pour tout CTA. */
export const APP_URL = "https://app.agentimpact.fr";
export const SIGNUP_URL = `${APP_URL}/signup`;
/**
 * Démo publique scriptée (dialogue client ↔ HostIA) — sans auth, sans
 * session dashboard, sans quota facturable. Cible unique des CTA
 * « Essayer » / « Essayer gratuitement ».
 */
export const DEMO_URL = `${APP_URL}/demo`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HostIA",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: ["https://agentimpact.fr", "https://www.linkedin.com/in/nadir-lahyani"],
    founder: {
      "@type": "Person",
      name: "Nadir Lahyani",
      sameAs: "https://www.linkedin.com/in/nadir-lahyani",
    },
    description:
      "HostIA est un agent vocal IA en français qui répond au téléphone des restaurants indépendants, prend les réservations et notifie l'équipe.",
    areaServed: "FR",
    inLanguage: "fr",
    knowsAbout: [
      "Agent vocal IA restaurant",
      "Prise de réservation automatisée",
      "Standard téléphonique restauration",
      "Synthèse vocale française",
    ],
  };
}

export interface PricingTier {
  /** Doit matcher PlanTier côté app (utils/stripe.ts, repo restauyacine) — simple/medium/luxe. */
  key: "simple" | "medium" | "luxe";
  name: string;
  price: number;
  description: string;
  features: readonly string[];
  /**
   * Payment Link Stripe (mode LIVE — compte "Agentimpact - HostIA", basculé
   * le 21/08/2026). Non utilisé par les CTA landing (cf. pricing-cards.tsx) :
   * un paiement Stripe direct créerait un customer sans organisation liée.
   * Conservé pour référence/audit — le CTA réel passe par
   * app.agentimpact.fr/api/stripe/checkout-public?tier=<key>, qui crée sa
   * propre Checkout Session avec le bon success_url (/post-payment).
   */
  stripeUrl: string;
}

/** Lien de prise de RDV — même compte Calendly que le reste d'AgentImpact. */
export const CALENDLY_URL = "https://calendly.com/nadir-lahyani-agentimpact/30min";

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    key: "simple",
    name: "Simple",
    price: 150,
    description: "Prise de réservation par téléphone, notification de l'équipe.",
    features: [
      "Prise de réservation par téléphone",
      "Reformulation avant validation",
      "Notification de l'équipe",
    ],
    stripeUrl: "https://buy.stripe.com/5kQ4gA9OC06q8Mk7S9cbC00",
  },
  {
    key: "medium",
    name: "Medium",
    price: 350,
    description:
      "Simple + lien d'acompte automatique et gestion des modifications/annulations.",
    features: [
      "Tout Simple",
      "Lien d'acompte automatique par SMS",
      "Gestion des modifications et annulations",
    ],
    stripeUrl: "https://buy.stripe.com/9B65kE3qe3iCd2AegxcbC01",
  },
  {
    key: "luxe",
    name: "Luxe",
    price: 650,
    description:
      "Medium + appels simultanés et prise de commande pour les groupes et événements.",
    features: [
      "Tout Medium",
      "Appels simultanés",
      "Prise de commande (groupes, événements, traiteur)",
    ],
    stripeUrl: "https://buy.stripe.com/3cI14o9OC4mGaUsdctcbC02",
  },
] as const;

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HostIA",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Agent vocal IA pour restaurants",
    operatingSystem: "Web",
    description:
      "Agent vocal IA en français qui répond au téléphone d'un restaurant, prend les réservations, envoie le lien d'acompte et notifie l'équipe en salle.",
    inLanguage: "fr",
    offers: PRICING_TIERS.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      url: `${SITE_URL}/pricing`,
      price: String(tier.price),
      priceCurrency: "EUR",
      // `billingIncrement` n'existe pas sur schema.org/Offer — la période
      // de facturation mensuelle est portée par priceSpecification.
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(tier.price),
        priceCurrency: "EUR",
        billingDuration: "P1M",
      },
    })),
    featureList: [
      "Réponse téléphonique automatique en français naturel",
      "Prise de réservation avec reformulation avant validation",
      "Lien d'acompte envoyé par SMS",
      "Notification immédiate de l'équipe",
      "Gestion des appels simultanés",
    ],
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HOSTIA_FAQ: readonly FaqItem[] = [
  {
    question: "Qu'est-ce que HostIA ?",
    answer:
      "HostIA est un agent vocal IA qui répond au téléphone d'un restaurant en français naturel. Il prend la réservation, la reformule pour éviter toute erreur, envoie un lien d'acompte par SMS si le restaurant l'active, et notifie immédiatement l'équipe en salle. Il ne remplace pas l'accueil du restaurant : il traite les appels qui, sinon, resteraient sans réponse pendant le service.",
  },
  {
    question: "HostIA peut-il gérer plusieurs appels en même temps ?",
    answer:
      "Oui, à partir du plan Luxe. HostIA prend plusieurs appels simultanément, ce qui évite qu'un client tombe sur une ligne occupée pendant un coup de feu.",
  },
  {
    question: "Combien coûte HostIA pour un restaurant indépendant ?",
    answer:
      "Trois formules mensuelles : Simple à 150€/mois, Medium à 350€/mois, Luxe à 650€/mois. Pas d'engagement à long terme imposé.",
  },
  {
    question: "Est-ce que HostIA remplace le personnel du restaurant ?",
    answer:
      "Non. HostIA traite uniquement les appels téléphoniques entrants. Tout ce qui sort de ce périmètre est transféré à l'équipe ou noté pour rappel.",
  },
];

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList — /pricing est une route distincte de la home. */
export function breadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(items: readonly FaqItem[] = HOSTIA_FAQ) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export interface WebPageSchemaInput {
  url: string;
  name: string;
  description: string;
}

/** WebPage minimal — pages cas d'usage (/prise-reservation-…, /commande-…, /gestion-appels-…). */
export function webPageSchema(input: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: input.url,
    name: input.name,
    description: input.description,
    inLanguage: "fr",
    isPartOf: { "@type": "WebSite", name: "HostIA", url: SITE_URL },
  };
}

export interface ServiceSchemaInput {
  url: string;
  name: string;
  description: string;
}

/** Service minimal — le périmètre fonctionnel décrit correspond au contenu visible de la page, pas à une offre commerciale distincte des tarifs déjà déclarés sur /pricing. */
export function serviceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { "@type": "Organization", name: "HostIA", url: SITE_URL },
    areaServed: "FR",
    audience: { "@type": "Audience", audienceType: "Restaurants indépendants et dark kitchens" },
  };
}

export interface ArticleSchemaInput {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

/** Article JSON-LD pour /ressources/[slug]. HostIA (AgentImpact) comme auteur/éditeur : contenu édito du produit, pas une signature individuelle. */
export function articleSchema(input: ArticleSchemaInput) {
  const url = `${SITE_URL}/ressources/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url,
    image: `${SITE_URL}/opengraph-image`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "fr",
    author: { "@type": "Organization", name: "HostIA", url: SITE_URL },
    publisher: { "@type": "Organization", name: "HostIA", url: SITE_URL },
  };
}
