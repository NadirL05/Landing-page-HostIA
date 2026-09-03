/**
 * Garde-fou : les CTA « Essayer » / « Essayer gratuitement » doivent
 * pointer vers DEMO_URL (/demo), jamais vers signup ni un login démo.
 * Exécuter : node scripts/assert-essayer-cta-demo.mjs
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

const schemas = read("lib/seo/schemas.ts");
const demoMatch = schemas.match(/export const DEMO_URL = `\$\{APP_URL\}(\/[^`]+)`/);
if (!demoMatch || demoMatch[1] !== "/demo") {
  console.error("FAIL: DEMO_URL must be ${APP_URL}/demo");
  process.exit(1);
}

const checks = [
  {
    file: "components/marketing/hero-section.tsx",
    mustInclude: ['href={DEMO_URL}', "Essayer gratuitement"],
    mustNotInclude: ['btn-primary">Essayer HostIA', "href={SIGNUP_URL} className=\"btn-primary\""],
  },
  {
    file: "components/marketing/cta-section.tsx",
    mustInclude: ['href={DEMO_URL}', "Essayer gratuitement"],
    mustNotInclude: ['btn-primary">Essayer HostIA'],
  },
  {
    file: "components/marketing/marketing-nav.tsx",
    mustInclude: ["DEMO_URL", "Essayer gratuitement"],
    mustNotInclude: ["SIGNUP_URL"],
  },
];

let failed = 0;
for (const check of checks) {
  const src = read(check.file);
  for (const needle of check.mustInclude) {
    if (!src.includes(needle)) {
      console.error(`FAIL ${check.file}: missing ${JSON.stringify(needle)}`);
      failed += 1;
    }
  }
  for (const needle of check.mustNotInclude) {
    if (src.includes(needle)) {
      console.error(`FAIL ${check.file}: must not contain ${JSON.stringify(needle)}`);
      failed += 1;
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} assertion(s) failed`);
  process.exit(1);
}

console.log("OK: CTA Essayer → DEMO_URL (/demo)");
