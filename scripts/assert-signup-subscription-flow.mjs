/** Render the real landing components to check their public navigation contract. */
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const modules = new Map();

// Use the existing TypeScript dependency for TSX and the app's @/ alias;
// no browser, running server, Stripe call, or authentication is needed.
function loadComponent(path) {
  let filename = resolve(root, path);
  if (!extname(filename)) {
    filename = [".ts", ".tsx"].map((suffix) => filename + suffix).find(existsSync);
  }
  assert.ok(filename, `Cannot resolve ${path}`);
  if (modules.has(filename)) return modules.get(filename).exports;

  const module = { exports: {} };
  modules.set(filename, module);
  const { outputText } = ts.transpileModule(readFileSync(filename, "utf8"), {
    fileName: filename,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const localRequire = (specifier) => {
    if (specifier.startsWith("@/")) return loadComponent(specifier.slice(2));
    if (specifier.startsWith(".")) return loadComponent(resolve(dirname(filename), specifier));
    return require(specifier);
  };
  new Function("require", "module", "exports", outputText)(localRequire, module, module.exports);
  return module.exports;
}

function anchors(Component, props) {
  const html = renderToStaticMarkup(createElement(Component, props));
  return [...html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map((match) => ({
    href: match[1].replaceAll("&amp;", "&"),
    label: match[2].replace(/<[^>]*>/g, "").trim(),
  }));
}

function assertSignup(links, context) {
  const signup = links.filter(({ label }) => label === "Créer un compte");
  assert.equal(signup.length, 1, `${context}: one signup CTA must remain available`);
  assert.equal(signup[0].href, "/pricing", `${context}: signup must first open local subscription selection`);
  assert.ok(links.some(({ href }) => href === "https://app.agentimpact.fr/demo"), `${context}: public demo remains available`);
  for (const { href } of links) {
    const url = new URL(href, "https://hostia.agentimpact.fr");
    assert.ok(!/^\/(signup|dashboard)(\/|$)/.test(url.pathname), `${context}: no direct signup/dashboard entry`);
  }
}

for (const [path, name] of [
  ["components/marketing/hero-section.tsx", "HeroSection"],
  ["components/marketing/cta-section.tsx", "CtaSection"],
]) {
  assertSignup(anchors(loadComponent(path)[name]), name);
}

const { USE_CASES } = loadComponent("lib/seo/use-cases.ts");
for (const meta of USE_CASES.filter(({ ctaSecondaryLabel }) => ctaSecondaryLabel === "Créer un compte")) {
  for (const [path, name] of [
    ["components/marketing/use-case/use-case-hero.tsx", "UseCaseHero"],
    ["components/marketing/use-case/use-case-cta-final.tsx", "UseCaseCtaFinal"],
  ]) {
    assertSignup(anchors(loadComponent(path)[name], { meta }), `${meta.slug}/${name}`);
  }
}

for (const [path, name] of [
  ["components/marketing/pricing-teaser-section.tsx", "PricingTeaserSection"],
  ["app/pricing/page.tsx", "default"],
  ["app/pricing/details/page.tsx", "default"],
]) {
  const links = anchors(loadComponent(path)[name]);
  const checkout = links.filter(({ href }) => href.includes("/api/stripe/checkout-public"));
  assert.equal(checkout.length, 3, `${path}: each paid plan must have one checkout link`);
  for (const [tier, label] of [["simple", "Simple"], ["medium", "Medium"], ["luxe", "Luxe"]]) {
    assert.deepEqual(
      checkout.find(({ label: text }) => text === `Choisir ${label}`),
      { label: `Choisir ${label}`, href: `https://app.agentimpact.fr/api/stripe/checkout-public?tier=${tier}` },
      `${path}: ${label} must use the paid subscription checkout`,
    );
  }
  assert.ok(!links.some(({ href }) => href.startsWith("https://buy.stripe.com/")), `${path}: no unlinked Stripe Payment Link`);
  assert.ok(!checkout.some(({ label }) => /essayer|gratuit/i.test(label)), `${path}: paid subscriptions cannot be advertised as free trials`);
}

console.log("OK: rendered signup CTAs → local pricing; all plans → paid checkout; public demo preserved");
