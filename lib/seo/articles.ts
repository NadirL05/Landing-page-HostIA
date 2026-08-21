/**
 * Registre des articles /ressources — métadonnées uniquement (le contenu
 * long-form vit dans chaque app/ressources/<slug>/page.tsx en JSX, pas en
 * markdown : trois articles bespoke ne justifient pas un moteur MDX). Ce
 * fichier reste la source unique pour l'index /ressources, le sitemap et
 * les schémas Article — un slug/titre changé ici seulement.
 */

import { SITE_URL } from "./schemas";

export interface ArticleMeta {
  slug: string;
  title: string;
  /** Titre plus court utilisé dans les cartes de l'index et les breadcrumbs. */
  navTitle: string;
  description: string;
  excerpt: string;
  kicker: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
}

export const ARTICLES: readonly ArticleMeta[] = [
  {
    slug: "combien-coute-un-appel-manque-restaurant",
    title: "Combien coûte un appel manqué dans un restaurant",
    navTitle: "Combien coûte un appel manqué",
    description:
      "Un appel non décroché pendant le service a un coût réel, pas seulement théorique. Méthode de calcul avec vos propres chiffres, sans statistique sectorielle invérifiable.",
    excerpt:
      "Un client qui n'a personne au bout du fil ne rappelle pas toujours plus tard — il appelle souvent le restaurant d'à côté. Voici comment chiffrer ce que ça vous coûte vraiment, avec vos chiffres à vous.",
    kicker: "Coût d'inaction",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingTime: "6 min de lecture",
  },
  {
    slug: "repondre-au-telephone-pendant-le-coup-de-feu",
    title: "Répondre au téléphone pendant le coup de feu : ce qui marche vraiment",
    navTitle: "Répondre pendant le coup de feu",
    description:
      "Renvoi d'appel, répondeur avec rappel, standard externalisé, agent vocal IA : quatre options réalistes pour ne plus perdre d'appels pendant le service, avec leurs vrais compromis.",
    excerpt:
      "Il n'y a pas une seule bonne réponse à « qui décroche pendant le coup de feu ? ». Il y a quatre options concrètes, chacune avec un vrai compromis à assumer.",
    kicker: "Organisation du service",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingTime: "7 min de lecture",
  },
  {
    slug: "ia-vocale-vs-standardiste-humain-restaurant",
    title: "IA vocale vs standardiste humain pour un restaurant : comparatif honnête",
    navTitle: "IA vocale vs standardiste humain",
    description:
      "Coût, disponibilité, ce qu'un humain fait mieux, ce qu'une IA vocale fait mieux : comparatif sans parti pris pour savoir quelle option correspond à quel restaurant.",
    excerpt:
      "Ni « l'IA remplace tout » ni « rien ne vaut un humain » : un comparatif qui assume les deux options ont leur restaurant cible, et que ce n'est pas le même.",
    kicker: "Comparatif",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readingTime: "8 min de lecture",
  },
] as const;

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articleUrl(slug: string): string {
  return `${SITE_URL}/ressources/${slug}`;
}
