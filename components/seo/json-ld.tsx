// `data` vient toujours de lib/seo/schemas.ts, jamais d'entrée utilisateur.
// Passé en children d'un <script> : React échappe le texte comme du texte
// brut, il n'est jamais interprété comme du HTML — pas de surface XSS ici.
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
