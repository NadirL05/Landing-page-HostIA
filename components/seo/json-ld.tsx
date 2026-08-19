// Contenu externalisé en fichier statique JSON (public/schema/*.json) et
// référencé via l'attribut src — Google supporte le JSON-LD externe depuis
// 2020. Évite le bug d'échappement HTML des children de <script> (React
// échappe les guillemets en entités, que le navigateur ne redécode jamais
// à l'intérieur d'un <script>, cassant le JSON) sans recourir à une
// injection de HTML brut.
export function JsonLd({ src }: { src: string }) {
  // `async` satisfait la règle ESLint next/no-sync-scripts — sans effet
  // réel ici puisqu'un script type="application/ld+json" n'est jamais
  // exécuté comme du JS, seulement parsé comme donnée par les crawlers.
  return <script type="application/ld+json" src={src} async />;
}
