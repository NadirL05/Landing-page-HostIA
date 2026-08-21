import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/schemas";
import { ARTICLES } from "@/lib/seo/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pricing`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ressources`, changeFrequency: "monthly", priority: 0.8 },
    ...ARTICLES.map((article) => ({
      url: `${SITE_URL}/ressources/${article.slug}`,
      lastModified: article.dateModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/mentions-legales`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/confidentialite`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
