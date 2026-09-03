/**
 * Registre des pages "cas d'usage" (acquisition SEO/GEO) — /prise-reservation-
 * telephonique-restaurant, /commande-telephone-restaurant,
 * /gestion-appels-simultanes-restaurant. Même logique que lib/seo/articles.ts :
 * une source unique pour le sitemap, la section d'accueil, le bloc
 * /ressources et les liens croisés entre les trois pages.
 *
 * Contenu strictement borné à ce qui est confirmé dans PRICING_TIERS/
 * HOSTIA_FAQ (lib/seo/schemas.ts) et le CLAUDE.md du repo produit
 * (restauyacine) : aucune fonctionnalité, aucun chiffre inventé.
 */

import { SITE_URL, SIGNUP_URL, DEMO_URL, PRICING_TIERS } from "./schemas";

export interface UseCaseStep {
  time: string;
  title: string;
  body: string;
}

export interface UseCaseFaqItem {
  question: string;
  answer: string;
}

export interface UseCaseMeta {
  slug: string;
  path: string;
  navTitle: string;
  kicker: string;
  h1: string;
  deck: string;
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  datePublished: string;
  dateModified: string;
  ticketLabel: string;
  steps: readonly UseCaseStep[];
  whatItDoes: readonly string[];
  whatItDoesNotReplace: readonly string[];
  faq: readonly UseCaseFaqItem[];
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  ctaFinalHeading: string;
  ctaFinalBody: string;
  /** Slugs de lib/seo/articles.ts — maillage §12 "depuis les articles" / "vers les articles pertinents". */
  relatedArticleSlugs: readonly string[];
}

const simpleTier = PRICING_TIERS[0];
const mediumTier = PRICING_TIERS[1];
const luxeTier = PRICING_TIERS[2];

export const USE_CASES: readonly UseCaseMeta[] = [
  {
    slug: "prise-reservation-telephonique-restaurant",
    path: "/prise-reservation-telephonique-restaurant",
    navTitle: "Réservation téléphonique",
    kicker: "Réservation téléphonique",
    h1: "Automatisez les réservations téléphoniques de votre restaurant",
    deck:
      "Pendant le service, personne n'est vraiment disponible pour prendre une réservation par téléphone sans interrompre son poste. HostIA décroche à la place de l'équipe, prend la réservation, la reformule avant de la valider, et la transmet au dashboard du restaurant.",
    metaTitle: "Réservation téléphonique automatisée pour restaurant | HostIA",
    metaDescription:
      "HostIA répond aux appels de votre restaurant, prend les informations de réservation, les reformule et notifie votre équipe, même pendant le service.",
    ogDescription:
      "Prise de réservation automatisée en français, reformulation avant validation, notification d'équipe.",
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
    ticketLabel: "Journal d'appel · Réservation",
    steps: [
      { time: "0 s", title: "Le client appelle pendant le service", body: "HostIA décroche en moins de 2 sonneries, en français naturel, même quand personne en salle n'est disponible." },
      { time: "10 s", title: "Date, heure et nombre de couverts recueillis", body: "L'agent pose les questions nécessaires à la réservation : jour, horaire, nombre de personnes, nom." },
      { time: "25 s", title: "Reformulation avant validation", body: "HostIA relit les informations au client pour écarter une erreur de date ou de nombre de couverts avant de confirmer." },
      { time: "35 s", title: "Lien d'acompte envoyé par SMS (selon le plan)", body: `À partir de l'offre ${mediumTier.name}, HostIA peut envoyer un lien d'acompte par SMS pour sécuriser la réservation.` },
      { time: "42 s", title: "Réservation transmise et équipe notifiée", body: "La réservation apparaît dans l'outil de gestion du restaurant et l'équipe reçoit une notification immédiate." },
    ],
    whatItDoes: [
      "Répondre à l'appel en français naturel, y compris pendant le coup de feu",
      "Recueillir date, heure, nombre de couverts et coordonnées",
      "Reformuler les informations avant de valider la réservation",
      "Transmettre la réservation au dashboard du restaurant et notifier l'équipe",
      `Envoyer un lien d'acompte par SMS, si l'offre ${mediumTier.name} ou ${luxeTier.name} est activée`,
    ],
    whatItDoesNotReplace: [
      "Une négociation commerciale ou une demande très spécifique (table précise pour un événement particulier, dérogation à une règle du restaurant)",
      "Une réclamation ou un échange qui demande une écoute humaine",
      "La décision finale du restaurant sur une réservation en dehors de son fonctionnement habituel",
    ],
    faq: [
      {
        question: "HostIA prend-il vraiment la réservation, ou juste un message ?",
        answer:
          "HostIA prend la réservation : date, heure, nombre de couverts et nom sont recueillis puis reformulés au client avant validation, avant d'être transmis au dashboard du restaurant.",
      },
      {
        question: "Que se passe-t-il si la demande sort du cadre d'une réservation simple ?",
        answer:
          "Une demande hors périmètre (négociation, réclamation, cas particulier) est transférée à l'équipe ou notée pour rappel — HostIA ne tente pas de la traiter à la place d'un humain.",
      },
      {
        question: "Le lien d'acompte est-il inclus dans toutes les offres ?",
        answer: `Non. L'envoi automatique d'un lien d'acompte par SMS est disponible à partir de l'offre ${mediumTier.name} (${mediumTier.price}€/mois). L'offre ${simpleTier.name} (${simpleTier.price}€/mois) couvre la prise de réservation et la notification d'équipe.`,
      },
    ],
    ctaPrimaryLabel: "Tester une réservation",
    ctaPrimaryHref: DEMO_URL,
    ctaSecondaryLabel: "Créer un compte",
    ctaSecondaryHref: SIGNUP_URL,
    ctaFinalHeading: "Une réservation de moins à gérer pendant le service",
    ctaFinalBody: "Testez le scénario de réservation sur la démo publique, sans inscription, ou créez un compte pour votre restaurant.",
    relatedArticleSlugs: ["combien-coute-un-appel-manque-restaurant", "repondre-au-telephone-pendant-le-coup-de-feu"],
  },
  {
    slug: "commande-telephone-restaurant",
    path: "/commande-telephone-restaurant",
    navTitle: "Commande téléphonique",
    kicker: "Commande téléphonique",
    h1: "Automatisez les commandes téléphoniques de votre restaurant",
    deck:
      "Une commande prise à la voix pendant le coup de feu est une des situations où les erreurs de plat ou de quantité arrivent le plus facilement. HostIA prend la commande à emporter, la reformule produit par produit, et la transmet structurée à l'équipe.",
    metaTitle: "Prise de commande téléphonique automatisée | HostIA",
    metaDescription:
      "HostIA prend les commandes téléphoniques d'un restaurant, reformule les informations et transmet une commande structurée à l'équipe.",
    ogDescription: "Prise de commande à emporter par téléphone, reformulation produit par produit, transmission à l'équipe.",
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
    ticketLabel: "Journal d'appel · Commande",
    steps: [
      { time: "0 s", title: "Le client appelle pour commander", body: "HostIA décroche et comprend la demande en français naturel, sans script rigide côté client." },
      { time: "15 s", title: "Produits et quantités recueillis", body: "L'agent identifie les plats commandés et leurs quantités à partir du menu du restaurant." },
      { time: "30 s", title: "Reformulation de la commande", body: "HostIA relit la commande au complet — produits, quantités — avant de la valider, pour éviter une erreur transmise à la cuisine." },
      { time: "40 s", title: "Coordonnées et type de commande recueillis", body: "Nom, contact et créneau de retrait à emporter sont enregistrés avec la commande." },
      { time: "48 s", title: "Commande transmise et équipe notifiée", body: "La commande apparaît structurée dans le dashboard du restaurant, et l'équipe est notifiée pour la préparer." },
    ],
    whatItDoes: [
      "Comprendre une commande passée à la voix, en français naturel",
      "Reformuler les produits et quantités avant de valider la commande",
      "Recueillir les coordonnées du client et le créneau de retrait",
      "Transmettre une commande structurée au dashboard du restaurant et notifier l'équipe",
    ],
    whatItDoesNotReplace: [
      "La livraison : HostIA prend une commande à emporter, pas une logistique de livraison",
      "Le paiement en ligne intégré à l'appel : le règlement se fait selon le fonctionnement habituel du restaurant",
      "La gestion fine des allergènes ou d'une modification complexe de recette — à confirmer directement avec l'équipe si besoin",
    ],
    faq: [
      {
        question: "HostIA gère-t-il la livraison des commandes ?",
        answer:
          "Non. HostIA prend une commande à emporter — produits, quantités, créneau de retrait — mais ne gère pas la logistique de livraison.",
      },
      {
        question: "Le client paie-t-il directement au téléphone ?",
        answer:
          "Non. La prise de commande téléphonique ne déclenche pas de paiement intégré à l'appel : le règlement suit le fonctionnement habituel du restaurant au retrait.",
      },
      {
        question: "Que se passe-t-il pour une demande liée à un allergène ?",
        answer:
          "Une demande précise sur un allergène ou une modification de recette est transmise à l'équipe pour confirmation directe, plutôt que traitée automatiquement par l'agent.",
      },
    ],
    ctaPrimaryLabel: "Tester une commande",
    ctaPrimaryHref: DEMO_URL,
    ctaSecondaryLabel: "Créer un compte",
    ctaSecondaryHref: SIGNUP_URL,
    ctaFinalHeading: "Une commande téléphonique de moins à noter à la main",
    ctaFinalBody: "Testez le scénario de commande sur la démo publique, sans inscription, ou créez un compte pour votre restaurant.",
    relatedArticleSlugs: ["repondre-au-telephone-pendant-le-coup-de-feu", "ia-vocale-vs-standardiste-humain-restaurant"],
  },
  {
    slug: "gestion-appels-simultanes-restaurant",
    path: "/gestion-appels-simultanes-restaurant",
    navTitle: "Appels simultanés",
    kicker: "Appels simultanés",
    h1: "Gérez plusieurs appels de votre restaurant en même temps",
    deck:
      `Pendant un coup de feu, plusieurs clients peuvent appeler au même moment — et un seul poste ne peut répondre qu'à un appel à la fois. À partir de l'offre ${luxeTier.name}, HostIA prend en charge plusieurs appels simultanément, sans mobiliser l'équipe en salle ou en cuisine.`,
    metaTitle: "Gérer les appels simultanés d'un restaurant | HostIA",
    metaDescription:
      "HostIA répond aux appels reçus pendant le coup de feu et centralise les réservations et commandes sans interrompre l'équipe du restaurant.",
    ogDescription: "Prise en charge de plusieurs appels simultanés pendant le service, centralisation des demandes.",
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
    ticketLabel: "Journal d'appel · Appels simultanés",
    steps: [
      { time: "0 s", title: "Trois clients appellent au même moment", body: "Un vendredi soir chargé, plusieurs appels arrivent en même temps sur la ligne du restaurant." },
      { time: "2 s", title: "HostIA décroche chaque appel", body: `Avec l'offre ${luxeTier.name}, HostIA répond à chaque appel entrant sans mettre les autres en attente indéfiniment.` },
      { time: "—", title: "Chaque demande est traitée séparément", body: "Réservation, commande ou question simple : chaque appel suit son propre scénario, reformulé avant validation." },
      { time: "—", title: "Les demandes sont centralisées", body: "Toutes les réservations et commandes prises pendant le pic d'appels apparaissent dans le même dashboard, dans l'ordre où elles ont été validées." },
    ],
    whatItDoes: [
      `Prendre en charge plusieurs appels entrants simultanément (offre ${luxeTier.name})`,
      "Traiter chaque appel selon son propre scénario (réservation ou commande), avec reformulation",
      "Centraliser toutes les demandes prises pendant le pic d'appels dans le même dashboard",
      "Notifier l'équipe sans mobiliser personne en salle ou en cuisine pour répondre au téléphone",
    ],
    whatItDoesNotReplace: [
      "Une garantie de capacité illimitée : HostIA n'a pas de capacité chiffrée publiée pour un volume d'appels extrême",
      "Une procédure humaine de secours : le restaurant garde intérêt à conserver un moyen de contact alternatif pour les cas exceptionnels",
      "Une demande inhabituelle ou hors script, transférée à l'équipe ou notée pour rappel comme sur un appel unique",
    ],
    faq: [
      {
        question: "Combien d'appels HostIA peut-il gérer en même temps ?",
        answer: `Plusieurs appels simultanés sont pris en charge avec l'offre ${luxeTier.name} (${luxeTier.price}€/mois). Aucune capacité chiffrée précise n'est publiée au-delà de cette fonctionnalité : pour un volume inhabituel, garder une procédure humaine de secours reste recommandé.`,
      },
      {
        question: "Cette fonctionnalité est-elle incluse dans toutes les offres ?",
        answer: `Non. Les appels simultanés sont réservés à l'offre ${luxeTier.name}. Les offres ${simpleTier.name} et ${mediumTier.name} traitent les appels un par un, dans l'ordre où ils arrivent.`,
      },
      {
        question: "Que se passe-t-il si une demande sort du cadre habituel pendant un pic d'appels ?",
        answer:
          "Chaque appel reste traité individuellement selon le même principe qu'un appel isolé : une demande hors périmètre est transférée à l'équipe ou notée pour rappel, jamais improvisée par l'agent.",
      },
    ],
    ctaPrimaryLabel: "Simuler plusieurs appels",
    ctaPrimaryHref: DEMO_URL,
    ctaSecondaryLabel: "Découvrir les tarifs",
    ctaSecondaryHref: "/pricing",
    ctaFinalHeading: "Un coup de feu, plusieurs appels, une seule équipe qui reste en salle",
    ctaFinalBody: "Écoutez le scénario d'appels simultanés sur la démo publique, sans inscription, ou comparez les offres.",
    relatedArticleSlugs: ["combien-coute-un-appel-manque-restaurant", "repondre-au-telephone-pendant-le-coup-de-feu"],
  },
] as const;

export function getUseCase(slug: string): UseCaseMeta | undefined {
  return USE_CASES.find((u) => u.slug === slug);
}

export function useCaseUrl(slug: string): string {
  const useCase = getUseCase(slug);
  return `${SITE_URL}${useCase?.path ?? `/${slug}`}`;
}

export function relatedUseCases(slug: string): readonly UseCaseMeta[] {
  return USE_CASES.filter((u) => u.slug !== slug);
}
