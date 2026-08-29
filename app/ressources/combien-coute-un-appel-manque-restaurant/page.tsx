import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ressources/article-shell";
import { MeasureCallout } from "@/components/ressources/measure-callout";
import { SITE_URL } from "@/lib/seo/schemas";
import { getArticle } from "@/lib/seo/articles";

const meta = getArticle("combien-coute-un-appel-manque-restaurant")!;

export const metadata: Metadata = {
  title: `${meta.title} | HostIA`,
  description: meta.description,
  alternates: { canonical: `/ressources/${meta.slug}` },
  robots: { index: true, follow: true },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `${SITE_URL}/ressources/${meta.slug}`,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p>
        Un appel qui sonne dans le vide un vendredi soir n&rsquo;est presque jamais un appel perdu au sens strict —
        c&rsquo;est un client qui, la plupart du temps, raccroche et compose un autre numéro. Le restaurant d&rsquo;à
        côté a de bonnes chances de décrocher. Le problème n&rsquo;est pas hypothétique, mais son <strong>montant</strong>{" "}
        l&rsquo;est souvent : la plupart des restaurateurs n&rsquo;ont jamais posé le calcul noir sur blanc.
      </p>

      <h2>Un calcul simple, pas une statistique sectorielle</h2>
      <p>
        On trouve facilement en ligne des chiffres du type « X % des appels de restaurants ne sont pas décrochés ».
        Ce n&rsquo;est pas le point de départ le plus utile : ce pourcentage dépend tellement du restaurant (taille de
        l&rsquo;équipe, heures d&rsquo;ouverture, volume d&rsquo;appels, saisonnalité) qu&rsquo;il ne dit rien de
        fiable sur votre établissement. Le calcul qui compte est plus simple, et vous pouvez le faire avec vos
        propres chiffres.
      </p>
      <p>
        <strong>Exemple illustratif</strong> — pas une moyenne de marché, juste une démonstration de méthode :
      </p>
      <ul>
        <li>Ticket moyen par couvert : 35€</li>
        <li>Taille moyenne d&rsquo;une réservation : 4 personnes → environ 140€ de chiffre d&rsquo;affaires potentiel par appel</li>
        <li>Appels non décrochés pendant un service chargé : 3 par semaine (hypothèse à vérifier avec vos propres chiffres, voir plus bas)</li>
      </ul>
      <p>
        Avec ces hypothèses : 3 × 140€ = <strong>420€ de réservations potentiellement perdues par semaine</strong>,
        soit environ 1 680€ sur un mois de quatre semaines. Ce n&rsquo;est pas un chiffre à prendre pour argent
        comptant — c&rsquo;est un exemple pour vous montrer comment poser le calcul avec <em>votre</em> ticket moyen
        et <em>votre</em> nombre réel d&rsquo;appels manqués, qui peut être très différent.
      </p>

      <h2>Pourquoi « embaucher quelqu&rsquo;un pour répondre » n&rsquo;est pas une réponse simple</h2>
      <p>
        La solution qui vient naturellement à l&rsquo;esprit — mettre quelqu&rsquo;un au téléphone pendant le service
        — se heurte à une réalité opérationnelle assez simple : au moment précis où le téléphone sonne le plus (19h30
        un vendredi), c&rsquo;est aussi le moment où chaque personne en salle et en cuisine est déjà occupée à plein
        temps. La personne qui décroche est presque toujours quelqu&rsquo;un qu&rsquo;on retire d&rsquo;une autre
        tâche — prise de commande, service, dressage — pas quelqu&rsquo;un de disponible.
      </p>
      <p>
        Recruter une personne dédiée uniquement à l&rsquo;accueil téléphonique change l&rsquo;équation : ça
        fonctionne, mais ça représente une charge salariale fixe (salaire, charges sociales, plannings, congés,
        remplacement en cas d&rsquo;absence) qui doit être mise en face du chiffre d&rsquo;affaires réellement
        récupéré — pas en face du chiffre théorique du calcul ci-dessus, qui suppose que 100 % des appels manqués
        se transforment en client perdu, ce qui n&rsquo;est presque jamais exactement le cas.
      </p>

      <h2>Ce que ce calcul ne doit pas être : une moyenne qu&rsquo;on vous vend</h2>
      <p>
        Se méfier des chiffres qui circulent dans les articles de ce type — y compris celui-ci — reste une bonne
        pratique. Un « X % des appels sont manqués en restauration » sorti de nulle part sert surtout à créer de
        l&rsquo;urgence, pas à vous informer. La bonne donnée n&rsquo;est pas une moyenne nationale : c&rsquo;est
        votre propre volume d&rsquo;appels non traités, sur votre propre ligne, pendant vos propres heures de
        pointe.
      </p>

      <MeasureCallout>
        <p style={{ margin: 0 }}>
          Pendant une semaine de service normal, notez sur un carnet près du téléphone chaque appel qui n&rsquo;a pas
          été décroché à temps : numéro affiché sans réponse, appel raccroché avant que quelqu&rsquo;un décroche, ou
          ligne occupée pendant un coup de feu. Multipliez ce nombre par votre ticket moyen de réservation. C&rsquo;est
          ce chiffre-là — pas une moyenne sectorielle — qui doit guider une décision d&rsquo;investir ou non dans une
          solution.
        </p>
      </MeasureCallout>

      <h2>Et ensuite ?</h2>
      <p>
        Si la mesure sur 7 jours montre un volume d&rsquo;appels manqués qui justifie d&rsquo;agir, plusieurs options
        existent — pas seulement l&rsquo;automatisation. L&rsquo;article{" "}
        <Link href="/ressources/repondre-au-telephone-pendant-le-coup-de-feu">
          Répondre au téléphone pendant le coup de feu : ce qui marche vraiment
        </Link>{" "}
        détaille les tactiques réalistes et leurs compromis, du renvoi d&rsquo;appel à l&rsquo;agent vocal IA. Une
        partie de ces appels manqués arrive d&rsquo;ailleurs au même moment — voir{" "}
        <Link href="/gestion-appels-simultanes-restaurant">comment HostIA gère plusieurs appels simultanés</Link>.
        Si vous regardez déjà du côté d&rsquo;un agent vocal, les{" "}
        <Link href="/pricing">tarifs HostIA</Link> partent de 150€/mois pour la{" "}
        <Link href="/prise-reservation-telephonique-restaurant">prise de réservation par téléphone</Link>.
      </p>
    </ArticleShell>
  );
}
