const testimonials = [
    {
        quote:
            "An exceptional establishment. The space is HUGE. It's a blank canvas which is a creatives dream. Don't wait — BOOK NOW.",
        author: "R.C.",
        role: "Client — The Ivory On Park",
        initials: "RC",
    },
    {
        quote:
            "Great space for a variety of events. There are multiple restrooms, bar & a kitchen/prep area. The owner is charismatic & helpful! I definitely recommend.",
        author: "Herodiane L.",
        role: "Client — The Ivory On Park",
        initials: "HL",
    },
    {
        quote:
            "This space was beyond amazing and the owner did everything to accommodate me and my friends. He gave us a reasonable price. Highly recommend.",
        author: "Adebisi A.",
        role: "Client — The Ivory On Park",
        initials: "AA",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-20 md:py-28 bg-brand-surface border-y border-brand-border"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <span className="section-label">Happy Clients</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-brand-muted text-lg max-w-xl mx-auto">
                        Real feedback from real business owners. Replace these with your
                        actual testimonials.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.author}
                            className="card-hover bg-brand-bg border border-brand-border rounded-2xl p-7 flex flex-col gap-5"
                        >
                            {/* Stars */}
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        viewBox="0 0 20 20"
                                        fill="#5B7FFF"
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="text-brand-text text-sm leading-relaxed flex-1">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>

                            <div className="flex items-center gap-3 border-t border-brand-border pt-5">
                                <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-blue text-xs font-bold flex-shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">
                                        {t.author}
                                    </div>
                                    <div className="text-xs text-brand-muted">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
