import { SITE_URL } from "@/lib/seo/schemas";

/**
 * RSL 1.0 (rslstandard.org) : licence machine-readable qui formalise en XML
 * ce que Content-Signal (robots.txt) déclare déjà en une ligne — recherche/
 * citation autorisées, pas d'entraînement de modèle. Référencée via
 * `License:` dans robots.txt. Voir https://rslstandard.org/guide/file-format
 */
export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rsl xmlns="https://rslstandard.org/rsl">
  <content url="${SITE_URL}/">
    <license>
      <permits type="usage">search</permits>
      <prohibits type="usage">ai-train</prohibits>
    </license>
  </content>
</rsl>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

export const dynamic = "force-static";
