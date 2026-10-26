import type { Metadata } from "next";
import { SITE_URL } from "./schemas";

/**
 * Audit SEO 26/10/2026 : 11 pages sur 12 n'avaient pas d'og:image. Dès qu'une
 * page déclare son propre `openGraph`, Next remplace celui du layout (fusion
 * superficielle) et perd l'image de app/opengraph-image.tsx. Idem pour
 * `twitter` : sans bloc propre, chaque page reprenait le titre de l'accueil.
 *
 * Ce helper garde les titres/descriptions déjà écrits par page et y ajoute
 * l'image existante (1200×630, générée au build) et une carte Twitter
 * complète. Aucune nouvelle image n'est créée.
 */
export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "HostIA — L'agent vocal IA qui répond au téléphone des restaurants",
} as const;

export interface SocialInput {
  title: string;
  description: string;
  path: string;
  /** Image propre à la page (ex. /ressources/<slug>/opengraph-image). Par défaut, celle de l'accueil. */
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
  /** Description propre à la carte Twitter, si la page en avait déjà une distincte. */
  twitterDescription?: string;
}

export function socialMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, type = "website", twitterDescription }: SocialInput): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "HostIA",
      locale: "fr_FR",
      type,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: twitterDescription ?? description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
