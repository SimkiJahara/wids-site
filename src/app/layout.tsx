import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: siteData.general.title,
  description: siteData.hero.description,
  icons: {
    icon: '/logos/widsBD.jpeg',
    apple: '/logos/widsBD.jpeg',
  },
  openGraph: {
    title: siteData.general.title,
    description: siteData.hero.description,
    images: ['/logos/widsBD.jpeg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.general.title,
    description: siteData.hero.description,
    images: ['/logos/widsBD.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
