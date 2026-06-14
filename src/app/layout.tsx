import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smash & Smash | Le Meilleur Smash Burger de Bruxelles",
  description: "Découvrez l'expérience Smash & Smash à Bruxelles. Burgers smashés à la perfection, viande belge fraîche et ambiance minimaliste. Commande en ligne et Click & Collect.",
  openGraph: {
    title: "Smash & Smash | Le Meilleur Smash Burger de Bruxelles",
    description: "La réaction de Maillard à son apogée. Des produits frais, un décor brut, le goût pur.",
    url: "https://smash-smash.be",
    siteName: "Smash & Smash",
    images: [
      {
        url: "/Dossier PNG SMASH SMASH/Menus PNG/Menu big smash.png",
        width: 1200,
        height: 630,
        alt: "Smash & Smash Bruxelles",
      },
    ],
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smash & Smash | Bruxelles",
    description: "Burgers smashés à la perfection, viande belge fraîche.",
    images: ["/Dossier PNG SMASH SMASH/Menus PNG/Menu big smash.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
