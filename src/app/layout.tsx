import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { SocialBanner } from "@/components/cta/SocialBanner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Guide Claude Code 2026 — Le Labo IA",
    template: "%s | Guide Claude Code 2026 — Le Labo IA",
  },
  description:
    "Documentation complète pour optimiser sa configuration Claude Code. CLAUDE.md, Rules, Agents, Skills, Hooks, Settings, MCP et plus.",
  authors: [{ name: "Meydeey", url: "https://x.com/meydeey" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Le Labo IA",
    title: "Guide Claude Code 2026 — Le Labo IA",
    description:
      "Documentation complète pour optimiser sa configuration Claude Code en 2026.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@meydeey",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        <div className="flex">
          <aside className="hidden md:block w-64 lg:w-72 border-r border-border shrink-0 sticky top-14 h-[calc(100vh-3.5rem)]">
            <Sidebar />
          </aside>
          <main className="flex-1 min-w-0">{children}</main>
        </div>
        <SocialBanner />
      </body>
    </html>
  );
}
