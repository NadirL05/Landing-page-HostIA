import type { Metadata } from "next";
import { UseCasePage } from "@/components/marketing/use-case/use-case-page";
import { UseCaseProblem } from "@/components/marketing/use-case/use-case-problem";
import { SITE_URL } from "@/lib/seo/schemas";
import { getUseCase } from "@/lib/seo/use-cases";

const meta = getUseCase("commande-telephone-restaurant")!;

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
          Une commande prise à la voix pendant le coup de feu se transmet souvent de mémoire, sur un bout de papier,
          entre deux allers-retours en cuisine. C&rsquo;est précisément dans ces conditions qu&rsquo;une quantité se
          perd, qu&rsquo;un plat se substitue à un autre, ou qu&rsquo;un créneau de retrait est mal noté.
        </p>
        <p>
          L&rsquo;erreur ne vient presque jamais d&rsquo;un manque d&rsquo;attention : elle vient du fait que la
          personne qui prend la commande fait déjà autre chose en même temps. Reformuler chaque commande avant de la
          valider — produit par produit — est le geste qui évite l&rsquo;essentiel des erreurs, mais c&rsquo;est
          justement le geste qu&rsquo;on saute quand on est débordé.
        </p>
        <p>
          HostIA prend la commande à emporter par téléphone, la reformule intégralement avant validation, et la
          transmet structurée à l&rsquo;équipe — sans occuper personne en cuisine pour répondre au téléphone.
        </p>
      </UseCaseProblem>
    </UseCasePage>
  );
}
