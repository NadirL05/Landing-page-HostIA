import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/schemas";
import { ARTICLES } from "@/lib/seo/articles";

const REDESIGN_DATE = new Date("2026-08-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: REDESIGN_DATE, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pricing`, lastModified: REDESIGN_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ressources`, lastModified: REDESIGN_DATE, changeFrequency: "monthly", priority: 0.8 },
    ...ARTICLES.map((article) => ({
      url: `${SITE_URL}/ressources/${article.slug}`,
      lastModified: article.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/mentions-legales`, lastModified: REDESIGN_DATE, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/confidentialite`, lastModified: REDESIGN_DATE, changeFrequency: "yearly", priority: 0.3 },
  ];
}
