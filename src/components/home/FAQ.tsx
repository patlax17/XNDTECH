"use client";
import { useState } from "react";

const faqs = [
    {
        q: "How fast can you build my site?",
        a: "Most projects are delivered within 48–72 hours for landing pages, and 5–7 business days for multi-page business sites. Timeline depends on how quickly you provide content (copy, images, brand assets).",
    },
    {
        q: "What do I need to provide?",
        a: "Your logo (if you have one), any photos or branding colors, and the copy/text for each page. Don't have copy? I can write basic placeholder text — or recommend a copywriter.",
    },
    {
        q: "Do you handle domain and hosting?",
        a: "Yes. I recommend deploying on Vercel (free tier available) with your own domain from any registrar (GoDaddy, Namecheap, etc.). I'll walk you through the setup or handle it for you.",
    },
    {
        q: "Will my site be mobile-friendly?",
        a: "Absolutely. Every site I build is mobile-first by default. It will look great on phones, tablets, and desktops.",
    },
    {
        q: "Can I update the site myself after launch?",
        a: "Yes! I'll give you a handover doc explaining how to edit text and images. For more complex edits, you can always reach out for a small hourly rate.",
    },
    {
        q: "Do you offer ongoing maintenance?",
        a: "Not as a recurring plan currently. But for small updates (text changes, adding a page), I'm available on a per-task basis. Just reach out.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-28 max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
                <span className="section-label">FAQ</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
                    Frequently Asked Questions
                </h2>
                <p className="text-brand-muted">
                    Something else on your mind?{" "}
                    <a href="/contact" className="text-brand-blue hover:underline">
                        Just ask →
                    </a>
                </p>
            </div>

            <div className="space-y-3">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden"
                    >
                        <button
                            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-white/3"
                            onClick={() => setOpen(open === i ? null : i)}
                            aria-expanded={open === i}
                            id={`faq-btn-${i}`}
                        >
                            <span className="font-medium text-white text-sm">{faq.q}</span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                className={`w-4 h-4 text-brand-blue flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""
                                    }`}
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="px-6 pb-5 text-brand-muted text-sm leading-relaxed border-t border-brand-border pt-4">
                                {faq.a}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
