import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
