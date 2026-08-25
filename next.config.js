const { withSentryConfig } = require("@sentry/nextjs");

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

// Landing statique (App Router) + scène 3D React Three Fiber en page d'accueil.
// - script-src: 'unsafe-inline' requis par le bootstrap/streaming inline de Next.js
//   (self.__next_f.push(...)) — pas de nonce ici (pas de middleware sur ce repo).
//   'unsafe-eval' NON nécessaire : three.js/R3F compilent leurs shaders côté GPU
//   (WebGL), pas via l'eval JS.
// - worker-src blob:: scène 3D React Three Fiber (bistro-table) en page d'accueil,
//   même précaution que PLU-IA/Hector pour R3F/three.js.
// - style-src 'unsafe-inline': next/font injecte du CSS inline.
// - connect-src/img-src 'self' uniquement : @vercel/analytics et
//   @vercel/speed-insights (app/layout.tsx) chargent leur script et envoient leurs
//   beacons via des chemins same-origin proxifiés par Next (/_vercel/insights/...,
//   /_vercel/speed-insights/...), donc 'self' suffit, pas besoin d'allowlister un
//   domaine externe. Le JSON-LD (components/seo/json-ld.tsx) est un <script
//   type="application/ld+json"> inline : ignoré par script-src (ce n'est pas un
//   type MIME JS), pas d'impact CSP. Stripe/Calendly sont de simples liens <a
//   href> (navigation, pas de requête interceptée par CSP) — vérifié dans
//   components/marketing/pricing-cards.tsx, pas d'iframe ni de fetch/XHR ailleurs
//   dans le repo.
// GoogleTag/MetaPixel/CMP ajoutés le 21/08 (même compte consentmanager.net
// que plu-ia-work, id 175740) : chargent des scripts externes, sans ces
// domaines en script-src la CSP les bloquait silencieusement (cf. incident
// GA4 plu-ia-work — voir CLAUDE.md).
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://cdn.consentmanager.net https://*.delivery.consentmanager.net",
  "style-src 'self' 'unsafe-inline'",
  // *.delivery.consentmanager.net : pixel de preuve de consentement
  // (/delivery/info/) — bloqué silencieusement sans ce wildcard, sur chaque
  // page vue, avant toute interaction (trouvé via audit SEO cross-repo le
  // 21/08, confirmé en navigateur réel sur hector.agentimpact.fr — même CSP
  // copiée sur les 3 repos, même bug partout).
  "img-src 'self' data: https://www.facebook.com https://cdn.consentmanager.net https://*.delivery.consentmanager.net",
  "font-src 'self'",
  // *.google-analytics.com / *.analytics.google.com : gtag envoie ses beacons
  // vers des sous-domaines régionaux (region1.google-analytics.com,
  // analytics.google.com) selon consent mode/résidence EEA — un domaine exact
  // ne suffit pas. Trouvé par audit SEO le 21/08 (finding HIGH), même classe
  // de bug que l'incident GA4 déjà documenté ci-dessus, corrigé avant de se
  // matérialiser cette fois.
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.facebook.com https://cdn.consentmanager.net https://*.delivery.consentmanager.net https://consentmanager.mgr.consensu.org",
  "worker-src 'self' blob:",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

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
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: "agentimpact",
  project: "landing-hostia",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  webpack: {
    automaticVercelMonitors: true,
    treeshake: { removeDebugLogging: true },
  },
});
