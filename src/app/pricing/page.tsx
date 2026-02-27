import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing — XNDR Technology",
    description:
        "Simple, transparent website pricing for small businesses. Choose from Starter, Business, or Premium. No hidden fees.",
};

const plans = [
    {
        name: "Starter",
        tagline: "Perfect for solopreneurs",
        price: "$299",
        duration: "one-time",
        highlight: false,
        badge: null,
        description: "A single, high-converting landing page to get you online and looking professional.",
        includes: [
            "1 custom page",
            "Mobile responsive design",
            "Basic on-page SEO",
            "Contact form (Formspree)",
            "Domain connection help",
            "1 round of revisions",
            "Delivery in ~48 hours",
        ],
        cta: "Get Started",
        ctaNote: "Book a quick call first to confirm fit",
    },
    {
        name: "Business",
        tagline: "Most picked by SMBs",
        price: "$799",
        duration: "one-time",
        highlight: true,
        badge: "Most Popular",
        description: "A full multi-page website that builds trust and drives conversions.",
        includes: [
            "Up to 5 custom pages",
            "Mobile responsive design",
            "Basic on-page SEO",
            "Contact form + Google Maps",
            "Social media links",
            "Google Analytics setup",
            "2 rounds of revisions",
            "Delivery in 5–7 business days",
        ],
        cta: "Get Started",
        ctaNote: "Book a call to discuss your pages",
    },
    {
        name: "Premium",
        tagline: "For growing businesses",
        price: "$1,499",
        duration: "one-time",
        highlight: false,
        badge: "Best Value",
        description: "A comprehensive web presence with everything a growing business needs.",
        includes: [
            "Up to 10 custom pages",
            "Mobile responsive design",
            "Full on-page SEO setup",
            "Contact form + booking embed",
            "Photo gallery or portfolio grid",
            "Google Analytics + Search Console",
            "Blog setup (optional)",
            "3 rounds of revisions",
            "Delivery in 10–14 business days",
        ],
        cta: "Get Started",
        ctaNote: "Book a call to map out your site",
    },
];

const addons = [
    { label: "Copywriting (per page)", price: "+$50" },
    { label: "Logo design (basic)", price: "+$150" },
    { label: "Rush delivery (<24hr)", price: "+$100" },
    { label: "Extra page", price: "+$75/page" },
    { label: "Monthly content update", price: "+$50/mo" },
];

export default function PricingPage() {
    return (
        <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-14">
                <span className="section-label">Transparent Pricing</span>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mt-2 mb-4">
                    Simple, Flat-Rate Pricing
                </h1>
                <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                    No hidden fees. No hourly surprises. You know exactly what you&apos;re
                    getting and what it costs before we start.
                </p>
            </div>

            {/* Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${plan.highlight
                                ? "bg-brand-blue/5 border-brand-blue shadow-xl shadow-brand-blue/10 scale-[1.02]"
                                : "bg-brand-surface border-brand-border card-hover"
                            }`}
                    >
                        {/* Badge */}
                        {plan.badge && (
                            <span
                                className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${plan.highlight
                                        ? "bg-brand-blue text-white border-brand-blue"
                                        : "bg-brand-surface text-brand-blue border-brand-blue/30"
                                    }`}
                            >
                                {plan.badge}
                            </span>
                        )}

                        {/* Plan name */}
                        <div className="mb-5">
                            <h2 className="font-display font-bold text-2xl text-white mb-1">
                                {plan.name}
                            </h2>
                            <p className="text-brand-muted text-sm">{plan.tagline}</p>
                        </div>

                        {/* Price */}
                        <div className="mb-2">
                            <span className="font-display font-extrabold text-5xl text-white">
                                {plan.price}
                            </span>
                            <span className="text-brand-muted text-sm ml-2">
                                {plan.duration}
                            </span>
                        </div>

                        <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                            {plan.description}
                        </p>

                        {/* CTA */}
                        <a
                            href="https://calendly.com" // 🔗 REPLACE with your Calendly link
                            target="_blank"
                            rel="noopener noreferrer"
                            className={plan.highlight ? "btn-primary justify-center" : "btn-secondary justify-center"}
                            id={`pricing-cta-${plan.name.toLowerCase()}`}
                        >
                            {plan.cta} →
                        </a>

                        <p className="text-center text-[11px] text-brand-muted mt-2">
                            {plan.ctaNote}
                        </p>

                        {/* Divider */}
                        <div className="border-t border-brand-border my-6" />

                        {/* Features */}
                        <ul className="space-y-3 flex-1">
                            {plan.includes.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-brand-text">
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-brand-blue" : "text-brand-blue"
                                            }`}
                                    >
                                        <path
                                            d="M3 8l3.5 3.5L13 4.5"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Disclaimer */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-12 text-sm text-brand-muted leading-relaxed max-w-3xl mx-auto text-center">
                <strong className="text-white">Note:</strong> All bookings and payments are handled via external
                tools (Calendly for scheduling, Stripe or bank transfer for payment). I do not process
                payments through this website. You&apos;ll receive a payment link after the discovery call.
            </div>

            {/* Add-ons */}
            <div className="max-w-2xl mx-auto">
                <h2 className="font-display font-bold text-2xl text-white text-center mb-6">
                    Optional Add-ons
                </h2>
                <div className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden divide-y divide-brand-border">
                    {addons.map((addon) => (
                        <div
                            key={addon.label}
                            className="flex items-center justify-between px-6 py-4 hover:bg-white/3 transition"
                        >
                            <span className="text-brand-text text-sm">{addon.label}</span>
                            <span className="font-semibold text-brand-blue text-sm">
                                {addon.price}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
                <p className="text-brand-muted mb-4">
                    Not sure which plan is right for you?
                </p>
                <a
                    href="https://calendly.com" // 🔗 REPLACE
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    id="pricing-page-bottom-cta"
                >
                    Book a Free 15-min Call →
                </a>
            </div>
        </div>
    );
}
