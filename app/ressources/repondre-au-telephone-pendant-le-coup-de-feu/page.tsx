import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ressources/article-shell";
import { SITE_URL } from "@/lib/seo/schemas";
import { getArticle } from "@/lib/seo/articles";

const meta = getArticle("repondre-au-telephone-pendant-le-coup-de-feu")!;

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
        « Qui décroche pendant le coup de feu ? » n&rsquo;a pas une seule bonne réponse. Il y a quatre options
        réalistes, et chacune a un vrai compromis — pas un inconvénient cosmétique qu&rsquo;on glisse en fin de
        paragraphe pour faire semblant d&rsquo;être objectif. Voici les quatre, avec ce qu&rsquo;elles coûtent
        vraiment.
      </p>

      <h2>1. Renvoyer l&rsquo;appel vers un second membre de l&rsquo;équipe</h2>
      <p>
        La solution la plus immédiate : configurer un renvoi d&rsquo;appel vers le portable d&rsquo;un second, un
        chef de rang ou le gérant quand la ligne principale ne répond pas en quelques sonneries.
      </p>
      <p>
        <strong>Ce qui marche :</strong> zéro coût d&rsquo;outil, mise en place en cinq minutes chez la plupart des
        opérateurs. <strong>Le compromis :</strong> la personne qui reçoit l&rsquo;appel est, par définition, déjà
        occupée ailleurs — en salle, en cuisine, au bar. Elle décroche avec une attention divisée, parfois dans un
        environnement trop bruyant pour bien entendre la demande, et la réservation risque d&rsquo;être mal notée ou
        mal transmise à l&rsquo;équipe. Ça fonctionne bien pour un restaurant à faible volume d&rsquo;appels ; ça
        devient vite intenable dès que plusieurs appels arrivent pendant le même coup de feu.
      </p>

      <h2>2. Répondeur avec rappel</h2>
      <p>
        Laisser le répondeur prendre le relais, avec un message clair invitant à laisser un numéro pour un rappel
        dans l&rsquo;heure.
      </p>
      <p>
        <strong>Ce qui marche :</strong> gratuit, aucune configuration technique complexe, et ça évite au moins la
        sonnerie dans le vide. <strong>Le compromis :</strong> c&rsquo;est la solution la plus fragile côté client. Un
        appelant qui cherche une table pour ce soir n&rsquo;attend généralement pas un rappel — il compose le numéro
        suivant sur sa liste. Le répondeur protège votre organisation interne, mais ne récupère quasiment jamais la
        réservation immédiate qui motivait l&rsquo;appel.
      </p>

      <h2>3. Standard téléphonique externalisé (humain)</h2>
      <p>
        Un service de permanence téléphonique externe, avec des standardistes humains qui répondent au nom du
        restaurant selon un script fourni.
      </p>
      <p>
        <strong>Ce qui marche :</strong> un vrai interlocuteur humain, capable de gérer l&rsquo;imprévu, de négocier
        une demande hors script (un client insistant, une situation particulière), et de transmettre un ton chaleureux
        cohérent avec l&rsquo;accueil du restaurant. <strong>Le compromis :</strong> le coût mensuel d&rsquo;un
        service externalisé dépasse souvent celui d&rsquo;un outil automatisé, et le standardiste n&rsquo;a
        généralement pas de visibilité en temps réel sur vos disponibilités de tables — il prend un message ou une
        demande, mais la confirmation reste souvent à valider côté restaurant. C&rsquo;est une bonne option pour un
        établissement qui veut un vrai filtre humain et peut absorber le coût, moins pour un indépendant qui cherche
        d&rsquo;abord à ne plus perdre de réservations simples.
      </p>

      <h2>4. Agent vocal IA</h2>
      <p>
        Un agent vocal qui répond en français, prend la réservation, la reformule pour éviter les erreurs, et
        notifie l&rsquo;équipe — sans mobiliser personne en salle.
      </p>
      <p>
        <strong>Ce qui marche :</strong> disponibilité immédiate y compris pendant les pics d&rsquo;appels
        simultanés (selon le plan), pas d&rsquo;embauche à gérer, et un script constant — l&rsquo;agent ne saute
        jamais une question (nombre de couverts, horaire, nom) parce qu&rsquo;il est débordé comme peut l&rsquo;être
        un humain un vendredi soir. <strong>Le compromis, assumé :</strong> un agent vocal IA suit un périmètre
        défini — réservation, reformulation, acompte selon le plan, notification d&rsquo;équipe. Tout ce qui sort de
        ce périmètre (une demande très spécifique, une négociation commerciale, une réclamation) doit être
        transféré à l&rsquo;équipe ou noté pour rappel, pas géré à sa place. Ce n&rsquo;est pas un inconvénient caché
        : c&rsquo;est un compromis logique pour un outil pensé pour absorber le flux d&rsquo;appels standard, pas
        remplacer l&rsquo;accueil du restaurant.
      </p>
      <p>
        Pour un restaurant indépendant qui perd des réservations précisément parce que personne n&rsquo;est
        disponible au bon moment, ce compromis-là est souvent le plus facile à accepter : l&rsquo;agent est présent
        justement quand renvoi d&rsquo;appel et répondeur échouent — pendant le coup de feu, en dehors des horaires
        d&rsquo;ouverture, ou quand plusieurs clients appellent en même temps.
      </p>

      <h2>Quelle option pour quel restaurant</h2>
      <ul>
        <li><strong>Très faible volume d&rsquo;appels, équipe suffisante :</strong> le renvoi d&rsquo;appel vers un second suffit souvent.</li>
        <li><strong>Budget serré, priorité à ne pas perdre le lien avec le client :</strong> répondeur avec rappel rapide, en dernier recours.</li>
        <li><strong>Établissement haut de gamme voulant un filtre humain dédié :</strong> standard externalisé.</li>
        <li><strong>Volume d&rsquo;appels élevé, équipe déjà à pleine charge pendant le service :</strong> agent vocal IA.</li>
      </ul>
      <p>
        Avant de choisir, il vaut la peine de mesurer votre propre volume d&rsquo;appels manqués — voir{" "}
        <Link href="/ressources/combien-coute-un-appel-manque-restaurant">Combien coûte un appel manqué dans un restaurant</Link>{" "}
        — et de comparer les options plus en détail dans{" "}
        <Link href="/ressources/ia-vocale-vs-standardiste-humain-restaurant">IA vocale vs standardiste humain : comparatif honnête</Link>.
        Les <Link href="/pricing">tarifs HostIA</Link> et la <Link href="/#faq">FAQ</Link> détaillent le périmètre exact de l&rsquo;agent vocal.
      </p>
    </ArticleShell>
  );
}
