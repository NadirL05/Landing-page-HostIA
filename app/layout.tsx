import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HostIA — Agent vocal IA pour restaurants | Réservations 24/7",
  description:
    "L'agent vocal IA qui prend tous les appels de ton restaurant. 0 résa ratée, acomptes encaissés automatiquement, cuisine notifiée. À partir de 150€/mois.",
  metadataBase: new URL("https://hostia.agentimpact.fr"),
  alternates: { canonical: "https://hostia.agentimpact.fr" },
  openGraph: {
    title: "HostIA — Agent vocal IA pour restaurants",
    description:
      "0 appel raté. Réservations 24/7, acomptes Stripe, notification cuisine. À partir de 150€/mois.",
    url: "https://hostia.agentimpact.fr",
    siteName: "HostIA",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HostIA — Agent vocal IA pour restaurants",
    description: "0 appel raté. Réservations 24/7. À partir de 150€/mois.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={plusJakartaSans.variable}>
      <body className="font-[--font-body]">{children}</body>
    </html>
  );
}
