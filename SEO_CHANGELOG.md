# SEO_CHANGELOG — hostia.agentimpact.fr

Journal des changements SEO, du plus récent au plus ancien. Chaque entrée renvoie à l'audit qui la justifie et dit comment la vérifier.

## 2026-10-26 — Corrections issues de l'audit SEO/GEO du 26/10/2026

Source : audit RosoAI SEO/GEO V4 (`SEO_AUDIT_2026-10-26.md`, relais 03, 07 et 22), accord de Nadir du 26/10 (« go pour tout, relie les sites »). Branche `seo/fix-gsc-indexation`.

| Changement | Fichiers | Vérification |
|---|---|---|
| og:image (1200×630, image existante générée au build) et carte Twitter `summary_large_image` sur les 11 pages qui n'en avaient pas. Les articles gardent leur image dédiée. | `lib/seo/social.ts`, `app/**/page.tsx` | `npm run seo:check` (règle og:image) |
| BreadcrumbList JSON-LD sur `/pricing/details` (Accueil > Tarifs > Détail des tarifs) | `app/pricing/details/page.tsx` | JSON-LD parsé par `seo:check` |
| Lien éditeur des mentions légales : `https://agentimpact.fr` (308) remplacé par `https://www.agentimpact.fr/`. `sameAs` de l'Organization aligné. | `app/mentions-legales/page.tsx`, `lib/seo/schemas.ts` | règle « apex » de `seo:check` |
| Lien « Un produit AgentImpact » vers `https://www.agentimpact.fr/` dans le pied de page commun et celui de `/pricing/details` | `components/marketing/footer.tsx`, `app/pricing/details/page.tsx` | `seo:check --external` |
| H2 propres à chaque page de cas d'usage (6 des 7 étaient identiques), reformulés à partir du contenu de la page | `lib/seo/use-cases.ts`, `components/marketing/use-case/*` | HTML : 7 H2 distincts par page |
| « Dernière mise à jour » des mentions légales et de la confidentialité : 21 octobre 2026 (changement d'adresse, commit 225a351). lastmod du sitemap aligné. | `app/mentions-legales/page.tsx`, `app/confidentialite/page.tsx`, `app/sitemap.ts` | `/sitemap.xml` |
| Script `scripts/seo-check.mjs` (`npm run seo:check`) | `scripts/seo-check.mjs`, `package.json` | sortie « seo-check : OK » |

Retour arrière : `git revert` du commit concerné. Aucune URL créée, déplacée ni supprimée.

Après déploiement (Nadir) : inspection d'URL et demande d'indexation dans Search Console pour `/gestion-appels-simultanes-restaurant` et `/mentions-legales`, puis « Valider la correction ».
