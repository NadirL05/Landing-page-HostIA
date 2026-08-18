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
export const DEMO_URL = `${APP_URL}/demo`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HostIA",
    url: SITE_URL,
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
  name: string;
  price: number;
  description: string;
  features: readonly string[];
}

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    name: "Simple",
    price: 150,
    description: "Prise de réservation par téléphone, notification de l'équipe.",
    features: [
      "Prise de réservation par téléphone",
      "Reformulation avant validation",
      "Notification de l'équipe",
    ],
  },
  {
    name: "Medium",
    price: 350,
    description:
      "Simple + lien d'acompte automatique et gestion des modifications/annulations.",
    features: [
      "Tout Simple",
      "Lien d'acompte automatique par SMS",
      "Gestion des modifications et annulations",
    ],
  },
  {
    name: "Luxe",
    price: 650,
    description:
      "Medium + appels simultanés, intégration complète aux outils de réservation existants.",
    features: [
      "Tout Medium",
      "Appels simultanés",
      "Intégration complète aux outils de réservation existants",
    ],
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
      price: String(tier.price),
      priceCurrency: "EUR",
      billingIncrement: "P1M",
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
