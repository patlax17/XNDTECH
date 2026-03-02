export default function HomeCTA() {
    return (
        <section className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-3xl overflow-hidden border border-brand-blue/20 bg-brand-surface">
                {/* Background glow */}
                <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(91,127,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(91,127,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="relative text-center py-16 px-6 sm:px-12">
                    <span className="section-label mx-auto">Ready to Start?</span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-5 leading-tight">
                        Let&apos;s build something{" "}
                        <span className="text-gradient-blue">great together.</span>
                    </h2>
                    <p className="text-brand-muted text-lg max-w-xl mx-auto mb-8">
                        Book a free 15-minute call. No pressure — just a quick chat to
                        see if we&apos;re a good fit and what your project needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://calendly.com/patsokoya17/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-base px-8 py-3.5"
                            id="bottom-cta-primary"
                        >
                            Book a Free Call →
                        </a>
                        <a
                            href="/pricing"
                            className="btn-secondary text-base px-8 py-3.5"
                            id="bottom-cta-pricing"
                        >
                            View Pricing
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
