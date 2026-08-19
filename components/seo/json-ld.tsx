// JSON-LD doit être injecté INLINE, pas via un attribut `src` externe.
// D'après la spec WHATWG HTML, un <script> dont le `type` n'est pas un type
// MIME JS/module (comme "application/ld+json") est classé comme "data
// block" : le navigateur (et le renderer de Googlebot) ne lit que le texte
// inline de l'élément et ne fait JAMAIS de requête vers `src` pour ce type
// de script. Le pattern src= précédemment utilisé ici rendait donc le
// JSON-LD invisible à tous les crawlers malgré des fichiers JSON valides.
//
// `dangerouslySetInnerHTML` est sûr ici : `data` est toujours un objet
// TypeScript défini dans lib/seo/schemas.ts (constantes développeur),
// jamais une entrée utilisateur — voir les call sites. JSON.stringify
// échappe correctement les guillemets, contournant aussi le bug d'origine
// (React échappe les guillemets des children texte d'un <script> en
// entités HTML, que le navigateur ne redécode jamais à l'intérieur d'un
// <script>, cassant le JSON — d'où le détour par `src` qui a introduit ce
// bug-ci).
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- donnée statique développeur, jamais une entrée utilisateur
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
