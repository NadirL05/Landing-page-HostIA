import type { Metadata } from "next";
import { UseCasePage } from "@/components/marketing/use-case/use-case-page";
import { UseCaseProblem } from "@/components/marketing/use-case/use-case-problem";
import { SITE_URL } from "@/lib/seo/schemas";
import { getUseCase } from "@/lib/seo/use-cases";

const meta = getUseCase("prise-reservation-telephonique-restaurant")!;

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
          Une réservation par téléphone arrive rarement au bon moment. Le pic d&rsquo;appels se produit précisément
          quand la salle et la cuisine tournent à plein régime — 19h30 un vendredi, pas 15h un mardi. La personne la
          plus proche du téléphone est presque toujours en train de faire autre chose : servir, dresser, encaisser.
        </p>
        <p>
          Décrocher dans ces conditions, c&rsquo;est prendre la réservation avec une attention divisée : une date mal
          entendue, un nombre de couverts approximatif, un nom qui se perd entre deux allers-retours en salle. Et
          quand personne ne décroche du tout, le client appelle simplement le restaurant suivant sur sa liste.
        </p>
        <p>
          HostIA reprend cette tâche précise — décrocher, recueillir les informations, les reformuler, transmettre —
          sans occuper personne de l&rsquo;équipe pendant le service.
        </p>
      </UseCaseProblem>
    </UseCasePage>
  );
}
