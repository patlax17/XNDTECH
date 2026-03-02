const steps = [
    {
        number: "01",
        title: "Pick a Plan",
        description:
            "Browse the pricing options and book a free 15-minute discovery call. We'll confirm scope, timeline, and any specific needs.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <path d="M9 12h6M9 16h4" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "We Build",
        description:
            "We design and develop your site with your brand assets and copy. You'll get a preview link to review and request tweaks.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Launch",
        description:
            "Site goes live on your domain. We handle deployment and provide a handover doc so you can manage it going forward.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z" />
            </svg>
        ),
    },
];

export default function Process() {
    return (
        <section id="process" className="py-20 md:py-28 bg-brand-surface border-y border-brand-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <span className="section-label">How It Works</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                        Simple 3-Step Process
                    </h2>
                    <p className="text-brand-muted text-lg max-w-xl mx-auto">
                        No lengthy contracts. No back-and-forth. Just a clean process
                        that gets your site live fast.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Connector line (desktop) */}
                    <div className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-brand-blue/40 via-brand-blue/20 to-brand-blue/40 pointer-events-none" />

                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col items-center text-center gap-4">
                            {/* Step circle */}
                            <div className="relative z-10 w-20 h-20 rounded-2xl bg-brand-bg border border-brand-border flex flex-col items-center justify-center shadow-lg">
                                <span className="text-brand-blue text-xs font-bold tracking-widest mb-0.5">
                                    {step.number}
                                </span>
                                <div className="text-brand-blue">{step.icon}</div>
                            </div>

                            <div>
                                <h3 className="font-display font-bold text-xl text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://calendly.com/patsokoya17/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        id="process-cta"
                    >
                        Start the Process →
                    </a>
                </div>
            </div>
        </section>
    );
}
