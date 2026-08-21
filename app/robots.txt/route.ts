import { SITE_URL } from "@/lib/seo/schemas";

/**
 * Route Handler manuelle (et non la convention `app/robots.ts`) car cette
 * dernière sérialise un objet `MetadataRoute.Robots` typé qui ne supporte
 * pas de ligne `Content-Signal` (pas un champ du type — voir
 * next/dist/build/webpack/loaders/metadata/resolve-route-data.js). Un
 * dossier littéral `app/robots.txt/route.ts` sert la même URL `/robots.txt`
 * tout en laissant un contrôle total sur le texte émis.
 *
 * Content-Signal (contentsignals.org) : préférences IA déclarées —
 * ai-train=no (pas d'entraînement de modèle sur ce contenu),
 * search=yes (indexation recherche autorisée),
 * ai-input=yes (utilisable comme contexte d'un agent IA).
 *
 * La directive Content-Signal se place à l'intérieur d'un groupe
 * User-Agent (entre `User-Agent:` et `Allow:`/`Disallow:`), pas comme
 * ligne isolée — cf. l'exemple de référence de Cloudflare :
 * https://blog.cloudflare.com/content-signals-policy/
 */
export async function GET() {
  const body = `User-Agent: *
Content-Signal: ai-train=no, search=yes, ai-input=yes
Allow: /

User-Agent: GPTBot
Content-Signal: ai-train=no, search=yes, ai-input=yes
Allow: /

User-Agent: ClaudeBot
Content-Signal: ai-train=no, search=yes, ai-input=yes
Allow: /

User-Agent: Google-Extended
Content-Signal: ai-train=no, search=yes, ai-input=yes
Allow: /

User-Agent: PerplexityBot
Content-Signal: ai-train=no, search=yes, ai-input=yes
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

export const dynamic = "force-static";
