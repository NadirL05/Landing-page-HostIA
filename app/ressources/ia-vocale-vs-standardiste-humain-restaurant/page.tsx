import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ressources/article-shell";
import { SITE_URL, PRICING_TIERS } from "@/lib/seo/schemas";
import { getArticle } from "@/lib/seo/articles";

const meta = getArticle("ia-vocale-vs-standardiste-humain-restaurant")!;

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
  const lowestTier = PRICING_TIERS[0];
  const highestTier = PRICING_TIERS[PRICING_TIERS.length - 1];

  return (
    <ArticleShell meta={meta}>
      <p>
        La question « IA vocale ou standardiste humain ? » est souvent posée comme si une des deux réponses devait
        systématiquement l&rsquo;emporter. En pratique, les deux options ont un profil de restaurant pour lequel
        elles sont la bonne réponse — et un profil pour lequel elles ne le sont pas. Voici les compromis, sans
        caricaturer l&rsquo;une pour mieux vendre l&rsquo;autre.
      </p>

      <h2>Coût</h2>
      <p>
        Un agent vocal IA comme HostIA se facture en abonnement mensuel fixe — {lowestTier.price}€ à {highestTier.price}€/mois
        selon le périmètre (réservation simple, acompte automatique, appels simultanés). Un standardiste humain,
        salarié ou externalisé, représente une charge différente dans sa structure : temps de travail à couvrir sur
        les horaires de service, congés, formation, turnover à gérer. Le montant exact dépend du volume horaire
        couvert, du statut (interne ou prestataire) et de votre convention collective — un chiffre précis et unique
        n&rsquo;aurait pas de sens ici, mais l&rsquo;ordre de grandeur est clair : un poste dédié, même à temps
        partiel, dépasse rapidement le tarif d&rsquo;un abonnement mensuel d&rsquo;agent vocal. Ce n&rsquo;est pas
        un argument en soi — un poste dédié peut valoir le coût pour ce qu&rsquo;il apporte en plus (voir plus bas) —
        mais c&rsquo;est le point de départ du calcul.
      </p>

      <h2>Disponibilité</h2>
      <p>
        Un agent vocal IA décroche immédiatement, y compris pendant le coup de feu, en dehors des horaires
        d&rsquo;ouverture du restaurant, ou lors d&rsquo;appels simultanés (selon le plan). Il n&rsquo;a pas
        d&rsquo;absence maladie, de jour de congé ni de moment où il est occupé ailleurs. Un standardiste humain a des
        horaires, une charge de travail limitée à un appel à la fois, et une disponibilité qui varie avec la fatigue
        de fin de service — ce qui reste vrai pour n&rsquo;importe quel poste, pas une critique du personnel de
        restauration en particulier. Sur ce critère précis, l&rsquo;avantage structurel va à l&rsquo;automatisation.
      </p>

      <h2>Ce qu&rsquo;un humain fait mieux</h2>
      <p>
        Un standardiste humain reste supérieur sur tout ce qui sort d&rsquo;un script : une négociation complexe
        (« pouvez-vous nous trouver une table alors que vous êtes complet, c&rsquo;est pour un anniversaire important
        »), une réclamation qui demande de l&rsquo;empathie réelle et pas seulement une reformulation polie, ou une
        relation construite avec des clients réguliers qui apprécient d&rsquo;être reconnus par leur nom au
        téléphone. Un établissement qui mise sur une expérience d&rsquo;accueil très personnalisée — un concierge
        dédié plutôt qu&rsquo;un centre d&rsquo;appels — trouve dans un humain quelque chose qu&rsquo;aucun agent
        vocal ne reproduit à l&rsquo;identique aujourd&rsquo;hui.
      </p>

      <h2>Ce qu&rsquo;une IA vocale fait mieux</h2>
      <p>
        À l&rsquo;inverse, un agent vocal IA est structurellement meilleur sur la constance : il ne saute jamais une
        étape du script (demander le nombre de couverts, reformuler l&rsquo;horaire, proposer l&rsquo;acompte si le
        plan l&rsquo;active), ne rate jamais un appel parce qu&rsquo;il est débordé, et traite chaque appel avec la
        même attention, que ce soit le premier ou le trentième de la soirée. C&rsquo;est un avantage réel pour un
        restaurant à volume d&rsquo;appels élevé et équipe déjà pleinement occupée en salle — le cas typique d&rsquo;un
        indépendant en sous-effectif pendant le service, pas d&rsquo;un établissement avec un poste d&rsquo;accueil
        dédié.
      </p>

      <h2>Quelle option pour quel restaurant</h2>
      <ul>
        <li>
          <strong>Restaurant indépendant, volume d&rsquo;appels élevé, équipe déjà à pleine charge pendant le
          service :</strong> l&rsquo;agent vocal IA correspond mieux au problème réel — appels manqués faute de
          disponibilité, pas faute de qualité d&rsquo;accueil.
        </li>
        <li>
          <strong>Établissement haut de gamme voulant une présence de concierge nommée, volume d&rsquo;appels
          modéré, budget pour un poste dédié :</strong> un standardiste humain (interne ou externalisé) reste la
          meilleure option — la relation et la gestion de l&rsquo;imprévu comptent plus que le coût par appel.
        </li>
        <li>
          <strong>Situation intermédiaire :</strong> beaucoup de restaurants combinent les deux — un agent vocal IA
          pour absorber le flux standard, une équipe humaine qui reste le point de contact pour tout ce qui sort du
          script.
        </li>
      </ul>
      <p>
        Aucune des deux options n&rsquo;est la bonne réponse par défaut. Le point de départ reste le même que pour
        toute décision d&rsquo;organisation du service :{" "}
        <Link href="/ressources/combien-coute-un-appel-manque-restaurant">mesurer le volume réel d&rsquo;appels non traités</Link>{" "}
        avant de choisir un outil pour le résoudre. Le détail des tactiques intermédiaires (renvoi d&rsquo;appel,
        répondeur, standard externalisé) est couvert dans{" "}
        <Link href="/ressources/repondre-au-telephone-pendant-le-coup-de-feu">Répondre au téléphone pendant le coup de feu</Link>.
        Côté agent vocal, HostIA couvre trois cas d&rsquo;usage précis : la{" "}
        <Link href="/prise-reservation-telephonique-restaurant">prise de réservation téléphonique</Link>, la{" "}
        <Link href="/commande-telephone-restaurant">prise de commande à emporter</Link>, et la{" "}
        <Link href="/gestion-appels-simultanes-restaurant">gestion de plusieurs appels simultanés</Link>.
        Les <Link href="/pricing">tarifs HostIA</Link> détaillent le périmètre exact par plan.
      </p>
    </ArticleShell>
  );
}
