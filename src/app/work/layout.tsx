import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work — XNDR Technology",
    description:
        "Browse the portfolio of websites built by XNDR Technology — landing pages, business sites, and event pages for small businesses.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
