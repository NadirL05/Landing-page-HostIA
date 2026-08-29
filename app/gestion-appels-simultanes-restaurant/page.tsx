import type { Metadata } from "next";
import { UseCasePage } from "@/components/marketing/use-case/use-case-page";
import { UseCaseProblem } from "@/components/marketing/use-case/use-case-problem";
import { SITE_URL } from "@/lib/seo/schemas";
import { getUseCase } from "@/lib/seo/use-cases";

const meta = getUseCase("gestion-appels-simultanes-restaurant")!;

export const metadata: Metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
  alternates: { canonical: meta.path },
  robots: { index: true, follow: true },
  openGraph: {
    title: meta.metaTitle,
    description: meta.ogDescription,
    url: `${SITE_URL}${meta.path}`,
    type: "website",
  },
};

export default function Page() {
  return (
    <UseCasePage meta={meta}>
      <UseCaseProblem>
        <p>
          Un restaurant n&rsquo;a généralement qu&rsquo;une ligne téléphonique et qu&rsquo;une personne en mesure de
          répondre à la fois. Pendant un coup de feu, plusieurs clients peuvent composer le numéro presque au même
          instant — le premier tombe sur une ligne occupée, le second raccroche avant la troisième sonnerie.
        </p>
        <p>
          Ce que vit ce client-là n&rsquo;a rien d&rsquo;anecdotique de son côté : une tonalité occupée ou une
          sonnerie qui continue sans réponse ressemble, pour lui, à un restaurant fermé ou indisponible. Il compose
          souvent le numéro suivant sur sa liste plutôt que de rappeler plus tard.
        </p>
        <p>
          Avec l&rsquo;offre Luxe, HostIA répond à plusieurs appels entrants au même moment, traite chaque demande
          selon son propre scénario, et centralise le tout dans le dashboard du restaurant — sans mobiliser
          davantage l&rsquo;équipe en salle ou en cuisine.
        </p>
      </UseCaseProblem>
    </UseCasePage>
  );
}
