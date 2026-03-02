"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border shadow-md"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group" aria-label="XNDR Technology Home">
                    <div className="relative w-8 h-8 flex-shrink-0">
                        <Image
                            src="/images/logo.png"
                            alt="XNDR Technology Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="font-display font-700 text-[1.05rem] tracking-wider text-white">
                        XNDR <span className="text-brand-blue">Technology</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${active
                                        ? "text-white bg-brand-surface border border-brand-border"
                                        : "text-brand-muted hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA + Mobile toggle */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://calendly.com/patsokoya17/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
                        id="navbar-cta"
                    >
                        Book a Call
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/5 transition"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        <span
                            className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-brand-surface/95 backdrop-blur-md border-b border-brand-border px-4 pb-4 pt-2">
                    <ul className="flex flex-col gap-1 mb-3">
                        {navLinks.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${active
                                            ? "text-white bg-brand-bg"
                                            : "text-brand-muted hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <a
                        href="https://calendly.com/patsokoya17/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center text-sm"
                    >
                        Book a Free Call
                    </a>
                </div>
            </div>
        </header>
    );
}
