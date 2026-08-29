import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { Footer } from "@/components/marketing/footer";
import { UseCaseHero } from "@/components/marketing/use-case/use-case-hero";
import { UseCaseSteps } from "@/components/marketing/use-case/use-case-steps";
import { UseCaseScope } from "@/components/marketing/use-case/use-case-scope";
import { UseCaseFaq } from "@/components/marketing/use-case/use-case-faq";
import { UseCaseCtaFinal } from "@/components/marketing/use-case/use-case-cta-final";
import { RelatedUseCases } from "@/components/marketing/use-case/related-use-cases";
import { RelatedArticles } from "@/components/marketing/use-case/related-articles";
import { SITE_URL, breadcrumbSchema, webPageSchema, serviceSchema } from "@/lib/seo/schemas";
import { relatedUseCases, type UseCaseMeta } from "@/lib/seo/use-cases";

/**
 * Coque commune aux 3 pages cas d'usage — nav, hero, JSON-LD (WebPage,
 * Service, BreadcrumbList), puis les sections mutualisées (steps, scope,
 * FAQ, CTA final, maillage) autour du `children` propre à chaque page
 * (section "explication du problème").
 */
export function UseCasePage({ meta, children }: { meta: UseCaseMeta; children: ReactNode }) {
  const url = `${SITE_URL}${meta.path}`;

  return (
    <>
      <JsonLd data={webPageSchema({ url, name: meta.metaTitle, description: meta.metaDescription })} />
      <JsonLd data={serviceSchema({ url, name: meta.h1, description: meta.deck })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: meta.navTitle, path: meta.path },
        ])}
      />
      <MarketingNav />
      <main>
        <UseCaseHero meta={meta} />
        {children}
        <UseCaseSteps label={meta.ticketLabel} steps={meta.steps} />
        <UseCaseScope whatItDoes={meta.whatItDoes} whatItDoesNotReplace={meta.whatItDoesNotReplace} />
        <UseCaseFaq id={`faq-${meta.slug}`} items={meta.faq} />
        <UseCaseCtaFinal meta={meta} />
        <RelatedUseCases items={relatedUseCases(meta.slug)} />
        <RelatedArticles slugs={meta.relatedArticleSlugs} />
      </main>
      <Footer />
    </>
  );
}
