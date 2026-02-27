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
    default: "XNDR Technology — Premium Web Design for Small Businesses",
    template: "%s | XNDR Technology",
  },
  description:
    "We build fast, clean, high-converting websites for small businesses. Mobile-first, SEO-ready, delivered fast. Book a free call today.",
  keywords: [
    "web design",
    "small business website",
    "landing page",
    "XNDR Technology",
    "affordable website",
    "Next.js developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xndrtechnology.com",
    siteName: "XNDR Technology",
    title: "XNDR Technology — Premium Web Design for Small Businesses",
    description:
      "Websites that look expensive — built fast. Mobile-first, SEO-ready, quick turnaround.",
  },
  twitter: {
    card: "summary_large_image",
    title: "XNDR Technology — Premium Web Design",
    description:
      "Websites that look expensive — built fast. Mobile-first, SEO-ready, quick turnaround.",
  },
  robots: {
    index: true,
    follow: true,
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
