"use client";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mpqjgqze";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setError("");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                const json = await res.json().catch(() => ({}));
                setError(
                    json?.errors?.[0]?.message ||
                    "Something went wrong. Please try again or email us directly."
                );
                setStatus("error");
            }
        } catch {
            setError("Network error. Please try emailing directly.");
            setStatus("error");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5" id="contact-form" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-1.5">
                        Name <span className="text-brand-blue">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:border-brand-blue transition"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-1.5">
                        Email <span className="text-brand-blue">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:border-brand-blue transition"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="project-type" className="block text-sm font-medium text-brand-text mb-1.5">
                    Project Type
                </label>
                <select
                    id="project-type"
                    name="project_type"
                    className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-blue transition appearance-none"
                >
                    <option value="">Select a service...</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="business-website">Business Website</option>
                    <option value="event-booking">Event / Booking Page</option>
                    <option value="other">Other / Not sure</option>
                </select>
            </div>

            <div>
                <label htmlFor="budget" className="block text-sm font-medium text-brand-text mb-1.5">
                    Budget Range
                </label>
                <select
                    id="budget"
                    name="budget"
                    className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-blue transition appearance-none"
                >
                    <option value="">Select a range...</option>
                    <option value="under-300">Under $300</option>
                    <option value="300-800">$300 – $800</option>
                    <option value="800-1500">$800 – $1,500</option>
                    <option value="1500+">$1,500+</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-1.5">
                    Message <span className="text-brand-blue">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, your business, and what you need..."
                    className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:border-brand-blue transition resize-none"
                />
            </div>

            {/* Error */}
            {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-3 text-sm">
                    {error}
                </div>
            )}

            {/* Success */}
            {status === "success" && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg px-4 py-3 text-sm">
                    ✅ Message sent! We&apos;ll get back to you within 24 hours.
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                id="contact-submit"
            >
                {status === "loading" ? "Sending..." : "Send Message →"}
            </button>

            <p className="text-center text-xs text-brand-muted">
                Prefer email?{" "}
                <a
                    href="mailto:hello@xndr.technology"
                    className="text-brand-blue hover:underline"
                >
                    hello@xndr.technology
                </a>
            </p>
        </form>
    );
}
