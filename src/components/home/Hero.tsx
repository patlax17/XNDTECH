"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = heroRef.current;
        if (!el) return;
        const items = el.querySelectorAll<HTMLElement>(".hero-animate");
        items.forEach((item, i) => {
            item.style.animationDelay = `${i * 120}ms`;
            item.classList.add("animate-fade-up");
        });
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
            aria-label="Hero section"
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(91,127,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(91,127,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />
            {/* Glow orb */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <div className="hero-animate opacity-0 inline-flex items-center gap-2 mb-6">
                    <span className="section-label">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse-slow" />
                        Available for new projects
                    </span>
                </div>

                {/* Headline */}
                <h1 className="hero-animate opacity-0 font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
                    Websites that look{" "}
                    <span className="text-gradient">expensive</span>
                    <br />— built{" "}
                    <span className="relative inline-block">
                        fast.
                        <svg
                            className="absolute -bottom-2 left-0 w-full"
                            viewBox="0 0 200 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M2 6 C50 2 150 2 198 4"
                                stroke="#5B7FFF"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </h1>

                {/* Subtext */}
                <p className="hero-animate opacity-0 text-brand-muted text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                    Quick turnaround. Clean, premium design. Mobile-first &amp;
                    SEO-ready — so small businesses can compete online without the
                    agency price tag.
                </p>

                {/* CTAs */}
                <div className="hero-animate opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://calendly.com/patsokoya17/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-base px-7 py-3.5"
                        id="hero-cta-primary"
                    >
                        Book a quick call →
                    </a>
                    <Link
                        href="/work"
                        className="btn-secondary text-base px-7 py-3.5"
                        id="hero-cta-secondary"
                    >
                        See my work
                    </Link>
                </div>

                {/* Trust bar */}
                <div className="hero-animate opacity-0 mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-brand-muted">
                    {[
                        { value: "48hr", label: "Avg. Delivery" },
                        { value: "100%", label: "Mobile-First" },
                        { value: "3+", label: "Projects Shipped" },
                        { value: "SEO", label: "Basics Included" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="font-display font-bold text-2xl text-white mb-0.5">
                                {stat.value}
                            </div>
                            <div className="text-xs tracking-wide uppercase text-brand-muted">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
                <span className="text-xs tracking-widest uppercase text-brand-muted">
                    scroll
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-brand-blue to-transparent" />
            </div>
        </section>
    );
}
