import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact — XNDR Technology",
    description:
        "Get in touch to discuss your website project. Book a free call or send a message.",
};

const socials = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/xndr.technology",
        handle: "@xndr.technology",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    return (
        <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-14">
                <span className="section-label">Get In Touch</span>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mt-2 mb-4">
                    Let&apos;s Talk
                </h1>
                <p className="text-brand-muted text-lg max-w-xl mx-auto">
                    Have a project in mind? Send us a message and we&apos;ll get back to you
                    within 24 hours.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Form */}
                <div className="bg-brand-surface border border-brand-border rounded-2xl p-7 sm:p-10">
                    <ContactForm />
                </div>

                {/* Right column */}
                <div className="space-y-8">
                    {/* Book a call */}
                    <div className="bg-brand-surface border border-brand-border rounded-2xl p-7">
                        <h2 className="font-display font-bold text-xl text-white mb-2">
                            Prefer a call?
                        </h2>
                        <p className="text-brand-muted text-sm mb-5 leading-relaxed">
                            Book a free 15-minute discovery call. We&apos;ll chat about your
                            project, timeline, and budget — no pressure, no commitments.
                        </p>
                        <a
                            href="https://calendly.com/patsokoya17/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full justify-center"
                            id="contact-calendly-cta"
                        >
                            Book a Free Call on Calendly →
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="bg-brand-surface border border-brand-border rounded-2xl p-7">
                        <h2 className="font-display font-bold text-xl text-white mb-4">
                            Find us online
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 bg-brand-bg border border-brand-border rounded-xl text-brand-muted hover:text-white hover:border-brand-blue/40 transition-all text-sm"
                                    id={`social-${s.name.toLowerCase().replace(/\s+\/\s+|\s+/g, "-")}`}
                                >
                                    <span className="text-brand-blue">{s.icon}</span>
                                    <span>
                                        <span className="block text-white font-medium">{s.name}</span>
                                        {"handle" in s && <span className="block text-xs text-brand-muted">{s.handle}</span>}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Response time note */}
                    <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6">
                        <div className="flex gap-3 items-start">
                            <div className="w-9 h-9 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">
                                    Fast Response Time
                                </p>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    We reply to all messages within 24 hours on business days. For
                                    urgent projects, mention it in your message.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
