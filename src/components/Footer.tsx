import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    Pages: [
        { href: "/", label: "Home" },
        { href: "/work", label: "Work" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
    ],
    Connect: [
        {
            href: "https://twitter.com/xndrtechnology", // 🔗 REPLACE
            label: "Twitter / X",
            external: true,
        },
        {
            href: "https://instagram.com/xndrtechnology", // 🔗 REPLACE
            label: "Instagram",
            external: true,
        },
        {
            href: "https://linkedin.com/company/xndrtechnology", // 🔗 REPLACE
            label: "LinkedIn",
            external: true,
        },
        {
            href: "https://github.com/xndrtechnology", // 🔗 REPLACE
            label: "GitHub",
            external: true,
        },
    ],
};

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-brand-border bg-brand-surface mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2.5 mb-3">
                            <div className="relative w-7 h-7">
                                <Image
                                    src="/images/logo.png"
                                    alt="XNDR Technology"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-display font-bold text-[0.95rem] tracking-wider text-white">
                                XNDR <span className="text-brand-blue">Technology</span>
                            </span>
                        </Link>
                        <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
                            Premium websites for small businesses. Fast delivery, clean
                            design, mobile-first — at a price that makes sense.
                        </p>
                        <a
                            href="https://calendly.com" // 🔗 REPLACE with your Calendly link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex mt-5 text-sm py-2 px-4"
                            id="footer-cta"
                        >
                            Book a Free Call →
                        </a>
                    </div>

                    {/* Nav links */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
                                {section}
                            </h3>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        {"external" in link && link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-brand-muted hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-sm text-brand-muted hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-brand-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-brand-muted text-xs">
                        © {year} XNDR Technology. All rights reserved.
                    </p>
                    <p className="text-brand-muted text-xs">
                        Built with Next.js · Deployed on Vercel
                    </p>
                </div>
            </div>
        </footer>
    );
}
