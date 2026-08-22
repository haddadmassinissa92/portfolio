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
  title: "Haddad Massinissa | Développeur Fullstack JavaScript",
  description:
    "Portfolio de Haddad Massinissa, développeur fullstack JavaScript spécialisé en React, Next.js, Node.js et MongoDB. Découvrez mes projets ProShop et Blog App.",
  keywords: [
    "développeur fullstack",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "portfolio développeur",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}