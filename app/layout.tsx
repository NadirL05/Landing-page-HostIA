import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConsentGate } from "@/components/analytics/consent-gate";
import { GoogleTag } from "@/components/analytics/google-tag";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import "./globals.css";

// Next.js 14.2.3 (version figée de ce repo) n'a pas Geist dans le
// catalogue next/font/google — ajouté seulement dans des versions Next
// plus récentes (restauyacine tourne en Next 16). Le paquet `geist` officiel
// de Vercel fonctionne lui indépendamment de la version de Next.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Le fond crème est full-bleed derrière l'encoche/la barre de statut iOS
  // et le geste Android : sans viewport-fit=cover, la disposition garde une
  // marge de sécurité implicite au lieu de laisser le header/CTA fixes gérer
  // eux-mêmes les env(safe-area-inset-*) (voir marketing-nav.tsx).
  viewportFit: "cover",
  themeColor: "#faf6ef",
};

export const metadata: Metadata = {
  title: "HostIA — L'agent vocal IA qui répond au téléphone des restaurants",
  description:
    "HostIA prend les appels d'un restaurant en français naturel, enregistre les réservations, envoie le lien d'acompte et notifie l'équipe. Dès 150€/mois, sans engagement long.",
  metadataBase: new URL("https://hostia.agentimpact.fr"),
  alternates: { canonical: "https://hostia.agentimpact.fr" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "HostIA — L'agent vocal IA qui répond au téléphone des restaurants",
    description:
      "Prise de réservation automatisée en français, notification d'équipe, lien d'acompte par SMS. Dès 150€/mois.",
    url: "https://hostia.agentimpact.fr",
    siteName: "HostIA",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HostIA — L'agent vocal IA qui répond au téléphone des restaurants",
    description: "Dès 150€/mois. Zéro appel manqué.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        {/*
         * consentmanager.net (CMP) : même compte que plu-ia-work (id
         * 175740, domaine racine agentimpact.fr couvre les sous-domaines,
         * config fournisseurs déjà correcte — Facebook Meta → Marketing,
         * Google Analytics → Mesure). Positionnement en tête de <head> :
         * n'atteint pas leur prérequis "premier script du document" sous
         * Next.js App Router (les chunks runtime Next passent devant, quel
         * que soit l'ordre source) — sans conséquence, ConsentGate ne
         * dépend pas de leur "automatic blocking" DOM, seulement du
         * dataLayer Consent Mode v2 qu'ils y poussent.
         */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          data-cmp-ab="1"
          src="https://cdn.consentmanager.net/delivery/autoblocking/a9d3fcbcd2398.js"
          data-cmp-host="a.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="16"
        />
      </head>
      <body>
        {/*
         * GoogleTag/MetaPixel ne se montent qu'après consentement (Google
         * Consent Mode v2, lu depuis dataLayer — voir consent-gate.tsx).
         */}
        <ConsentGate category="analytics">
          <GoogleTag />
        </ConsentGate>
        <ConsentGate category="marketing">
          <MetaPixel />
        </ConsentGate>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
