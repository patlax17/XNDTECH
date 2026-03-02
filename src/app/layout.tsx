import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "XNDR Technology — Websites That Look Expensive, Built Fast",
    template: "%s | XNDR Technology",
  },
  description:
    "We build fast, custom websites, e-commerce platforms, and AI integrations for small businesses. Mobile-first, SEO-ready, delivered fast. Book a free call today.",
  keywords: [
    "web design",
    "small business website",
    "landing page",
    "XNDR Technology",
    "affordable website",
    "Next.js developer",
    "e-commerce",
    "AI integration",
    "booking website",
    "custom web development",
  ],

  // ─── Open Graph (Facebook, Instagram, iMessage, WhatsApp, Discord, Slack) ──
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xndr.technology",
    siteName: "XNDR Technology",
    title: "XNDR Technology — Websites That Look Expensive, Built Fast",
    description:
      "Custom web development, e-commerce, and AI integrations for small businesses. Mobile-first. SEO-ready. Book a free discovery call.",
    images: [
      {
        url: "https://xndr.technology/og-image.png",
        width: 1200,
        height: 630,
        alt: "XNDR Technology — Websites That Look Expensive, Built Fast",
        type: "image/png",
      },
    ],
  },

  // ─── Twitter / X Card ────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "XNDR Technology — Websites That Look Expensive, Built Fast",
    description:
      "Custom web development, e-commerce, and AI integrations for small businesses.",
    images: ["https://xndr.technology/og-image.png"],
  },

  // ─── Favicons & Icons ────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon-32x32.png" },
    ],
  },

  // ─── Web App Manifest (Android / PWA) ────────────────────────────────────
  manifest: "/site.webmanifest",

  // ─── Theme colors ─────────────────────────────────────────────────────────
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
  ],

  // ─── Verification & indexing ──────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sora.variable} font-sans bg-brand-bg text-brand-text antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
