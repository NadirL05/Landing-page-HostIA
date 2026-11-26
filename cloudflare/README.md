# HostIA sur Cloudflare Workers

Depuis la racine, avec Node 22.12+ et npm, lancer `npm ci` puis `npm run build:worker`. Le répertoire `out/` contient les pages, les fichiers de navigation de Next.js, les images Open Graph et les règles d’en-têtes et de redirection.

Pour la recette, lancer `npx wrangler dev --local`, puis `node scripts/seo-check.mjs --base http://127.0.0.1:8787`. Le test du tunnel s'exécute avec `node --test scripts/test-worker-tunnel.mjs`. Il utilise un destinataire simulé.

`npx wrangler deploy --dry-run` vérifie le paquet. Pour publier après connexion au compte Cloudflare, utiliser `npm run deploy:worker`. La configuration publie le Worker `hostia-vitrine` sans domaine personnalisé ni URL workers.dev. Le rattachement de `hostia.agentimpact.fr` se fait séparément après vérification de la version et de la route de retour.

Les fichiers statiques sont servis par Workers Assets. Seule la route `/monitoring` exécute du code Worker pour transférer les enveloppes de télémétrie au projet Sentry existant. Le build Next.js habituel pour AWS garde sa propre configuration.
