import { readFile, readdir, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

// Reuse the headers applied by the ordinary Next.js build. Fail on a new rule
// until it has a verified Workers Assets equivalent.
const { headers } = JSON.parse(await readFile(".next/routes-manifest.json", "utf8"));
const lines = [];
for (const rule of headers) {
  if (rule.has || rule.missing || (rule.source !== "/:path*" && /[:*()]/.test(rule.source))) {
    throw new Error(`Unsupported Next.js header rule: ${rule.source}`);
  }
  lines.push(rule.source === "/:path*" ? "/*" : rule.source);
  for (const { key, value } of rule.headers) lines.push(`  ${key}: ${value}`);
}
lines.push("/_next/static/*", "  Cache-Control: public, max-age=31536000, immutable");
const redirects = [];
async function addRoutes(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name !== "_next") await addRoutes(file);
      continue;
    }
    const path = "/" + relative("out", file).split(sep).join("/");
    if (item.name === "opengraph-image") lines.push(path, "  Content-Type: image/png");
    if (path.endsWith(".html") && !["/index.html", "/404.html"].includes(path)) {
      const page = path.slice(0, -5);
      redirects.push(`${page}/ ${page} 308`);
    }
  }
}
await addRoutes("out");
await writeFile("out/_headers", lines.join("\n") + "\n");
await writeFile("out/_redirects", redirects.join("\n") + "\n");
