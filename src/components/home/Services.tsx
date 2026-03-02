"use client";
import { useState } from "react";

const services = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        title: "Custom Web Development",
        badge: "Core Service",
        description:
            "We build websites from scratch — not templates — using modern frameworks like Next.js and React. Every site is hand-coded to your brand, fast-loading, and built to actually convert visitors into clients.",
        features: [
            "Landing pages & multi-page business sites",
            "Mobile-first responsive design",
            "Lightning-fast load times (Core Web Vitals optimized)",
            "Built on modern tech — not drag-and-drop builders",
            "Clean, maintainable codebase you own forever",
        ],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20" />
            </svg>
        ),
        title: "E-Commerce & Platform Engineering",
        badge: null,
        description:
            "From full online stores to booking systems, ticketing platforms, and deposit flows — we engineer platforms that run your business. Real infrastructure, not a \"store builder\" with transaction fees eating your margin.",
        features: [
            "Custom e-commerce storefronts (Stripe-integrated)",
            "Live ticketing & RSVP systems",
            "Deposit & payment acceptance on-site",
            "Product pages, cart, checkout — fully custom",
            "Admin portals for order & inventory management",
        ],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: "AI Integration & Automation",
        badge: "New",
        description:
            "We embed AI directly into your business — not as a gimmick, but as a tool that works for you 24/7. From intelligent chatbots that handle customer questions to automated workflows that save hours every week.",
        features: [
            "AI-powered chat assistants & booking bots",
            "Automated lead capture & follow-up flows",
            "Smart FAQ systems trained on your own content",
            "Content generation & SEO automation",
            "Custom AI integrations via OpenAI, Claude & more",
        ],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: "Brand & SEO Foundation",
        badge: null,
        description:
            "A beautiful site means nothing if nobody finds it. We build every project with on-page SEO baked in from day one — the right structure, metadata, speed, and signals that help you rank on Google without paying for ads.",
        features: [
            "On-page SEO setup (titles, meta, schema)",
            "Google Analytics & Search Console integration",
            "Page speed optimization",
            "Social media link architecture",
            "Mobile & accessibility best practices",
        ],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
            </svg>
        ),
        title: "Event, Booking & Hospitality Sites",
        badge: "Fastest Build",
        description:
            "Venues, DJs, photographers, caterers — if your business runs on bookings, we build the system that captures them. Integrated calendars, event listings, RSVP flows, and more. Live in 48–72 hours.",
        features: [
            "Calendly / booking form integration",
            "Event pages with countdown & RSVP",
            "Photo & video gallery sections",
            "Candlelight / ticketed event support",
            "Press kit & media pages",
        ],
    },
];

const whyNotWix = [
    {
        them: "Monthly fees forever ($16–$59/mo on Wix, Squarespace, Shopify)",
        us: "You pay once. Your site is yours — no subscriptions, ever.",
    },
    {
        them: "Templates used by thousands of other businesses",
        us: "100% custom-built to your brand. No one else has your site.",
    },
    {
        them: "Transaction fees on every sale (up to 3% on Wix Stores)",
        us: "Zero platform cuts. You keep every dollar.",
    },
    {
        them: "Locked into their ecosystem — hard to leave",
        us: "Your code, your domain, your hosting. Total ownership.",
    },
    {
        them: "Slow, bloated pages that hurt your Google ranking",
        us: "Hand-coded, optimized sites that load fast and rank better.",
    },
    {
        them: "\"AI tools\" that are just form templates",
        us: "Real AI integrations — chatbots, automation, and smart workflows.",
    },
];

export default function Services() {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <section id="services" className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-14">
                <span className="section-label">What We Build</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Full-Stack Digital Services
                </h2>
                <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                    We don&apos;t just build websites — we build the digital infrastructure your business runs on.
                    Web, e-commerce, AI, and everything in between.
                </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="relative card-hover bg-brand-surface border border-brand-border rounded-2xl p-7 flex flex-col gap-5 cursor-pointer"
                        onClick={() =>
                            setExpanded(expanded === service.title ? null : service.title)
                        }
                    >
                        {/* Badge */}
                        {service.badge && (
                            <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-brand-blue/15 text-brand-blue border border-brand-blue/25 px-2.5 py-1 rounded-full">
                                {service.badge}
                            </span>
                        )}

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                            {service.icon}
                        </div>

                        {/* Text */}
                        <div>
                            <h3 className="font-display font-bold text-xl text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-brand-muted text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* Features */}
                        <ul
                            className={`space-y-2 border-t border-brand-border pt-5 transition-all duration-300 overflow-hidden ${expanded === service.title
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0 border-t-0 pt-0"
                                }`}
                        >
                            {service.features.map((f) => (
                                <li key={f} className="flex items-start gap-2.5 text-sm text-brand-text">
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5"
                                    >
                                        <path
                                            d="M3 8l3.5 3.5L13 4.5"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        {/* Expand hint */}
                        <p className="text-xs text-brand-muted mt-auto flex items-center gap-1">
                            <span>{expanded === service.title ? "Click to collapse" : "Click to see what&apos;s included"}</span>
                            <svg viewBox="0 0 16 16" fill="none" className={`w-3 h-3 transition-transform ${expanded === service.title ? "rotate-180" : ""}`}>
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </p>
                    </div>
                ))}
            </div>

            {/* Why Not Wix Section */}
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 md:p-12">
                <div className="text-center mb-10">
                    <span className="section-label">The Real Cost of &quot;Easy&quot;</span>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-2 mb-3">
                        Why Not Just Use Wix or Squarespace?
                    </h2>
                    <p className="text-brand-muted text-base max-w-2xl mx-auto">
                        They make it sound simple — but the monthly fees, commissions, and limitations add up fast.
                        Here&apos;s what you&apos;re actually paying for.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {whyNotWix.map((item, i) => (
                        <div key={i} className="grid grid-cols-2 gap-3">
                            {/* Them */}
                            <div className="bg-red-500/5 border border-red-500/15 rounded-xl p-4">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-red-400/70 mb-2">
                                    Wix / Squarespace / Shopify
                                </p>
                                <p className="text-sm text-red-300/80 leading-relaxed">{item.them}</p>
                            </div>
                            {/* Us */}
                            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-blue/70 mb-2">
                                    XNDR Technology
                                </p>
                                <p className="text-sm text-brand-text leading-relaxed">{item.us}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-brand-muted text-sm mb-5 max-w-xl mx-auto">
                        A custom site from XNDR pays for itself in under a year compared to Wix&apos;s Business plan —
                        and you&apos;re left with something that actually represents your brand.
                    </p>
                    <a
                        href="https://calendly.com/patsokoya17/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        id="services-wix-cta"
                    >
                        Let&apos;s Build Something Better →
                    </a>
                </div>
            </div>
        </section>
    );
}
