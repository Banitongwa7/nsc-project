import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NSC | Nyota Skincare",
  description: "Vente de produits cosmétiques de toutes marques à Kinshasa sur commande",
  icons: "https://nyota-skincare.vercel.app/assets/logo/Logo-tp.svg",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nyota-skincare.vercel.app/",
    title: "NSC | Nyota Skincare",
    description: "Vente de produits cosmétiques de toutes marques à Kinshasa sur commande",
    images : [
      {
        url: "https://nyota-skincare.vercel.app/assets/logo/Logo-tp.svg",
        width: 1200,
        height: 630,
        alt: "NSC | Nyota Skincare",
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NSC | Nyota Skincare",
    description: "Vente de produits cosmétiques de toutes marques à Kinshasa sur commande",
    images: [
      {
        url: "https://nyota-skincare.vercel.app/assets/logo/Logo-tp.svg",
        width: 1200,
        height: 630,
        alt: "NSC | Nyota Skincare",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
