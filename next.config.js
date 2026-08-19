/** @type {import('next').NextConfig} */
// Link headers (RFC 8288) sur la homepage et la page tarifs — découverte par
// en-têtes HTTP pour les agents IA. Pas d'entrée `api-catalog` : HostIA
// n'expose aucune API publique, et publier un catalogue vide ferait baisser
// le score agent-readiness plutôt que l'améliorer.
//
// Fichier en `.js` (pas `.ts`) : ce repo est figé sur Next.js 14.2.3, qui
// ne supporte pas `next.config.ts` (ajouté seulement en Next 15+).
const LINK_HEADER = {
  key: "Link",
  value: [
    '</.well-known/mcp/server-card.json>; rel="service-desc"',
    '</sitemap.xml>; rel="sitemap"',
  ].join(", "),
};

const nextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [LINK_HEADER],
      },
      {
        source: "/pricing",
        headers: [LINK_HEADER],
      },
    ];
  },
};

module.exports = nextConfig;
