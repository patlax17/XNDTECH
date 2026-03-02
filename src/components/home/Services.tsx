const services = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        title: "Landing Pages",
        description:
            "High-converting single pages designed to turn visitors into leads or customers. Perfect for launches, promos, and service businesses.",
        features: [
            "Compelling hero section",
            "Mobile-first responsive",
            "Basic on-page SEO",
            "Contact / booking form",
        ],
        badge: "Most Popular",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: "Business Websites",
        description:
            "Multi-page sites that build trust and showcase your brand. Up to 5 pages including Home, About, Services, Portfolio, and Contact.",
        features: [
            "Up to 5 custom pages",
            "Brand-aligned design",
            "Google Analytics setup",
            "Social links & map embed",
        ],
        badge: null,
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
            </svg>
        ),
        title: "Event & Booking Pages",
        description:
            "Sleek event pages and booking sites integrated with tools like Calendly, Eventbrite, or a simple contact form — live in 48 hours.",
        features: [
            "Calendly / Eventbrite embed",
            "Countdown timer option",
            "Photo gallery section",
            "RSVP / ticket link",
        ],
        badge: "Fastest Build",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
                <span className="section-label">What We Build</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Services
                </h2>
                <p className="text-brand-muted text-lg max-w-xl mx-auto">
                    Three focused offerings — no bloat, no upsells you don&apos;t need.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="relative card-hover bg-brand-surface border border-brand-border rounded-2xl p-7 flex flex-col gap-5"
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
                        <ul className="mt-auto space-y-2 border-t border-brand-border pt-5">
                            {service.features.map((f) => (
                                <li key={f} className="flex items-center gap-2.5 text-sm text-brand-text">
                                    <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        className="w-4 h-4 text-brand-blue flex-shrink-0"
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
                    </div>
                ))}
            </div>
        </section>
    );
}
