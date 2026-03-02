"use client";
import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

// Collect all unique tags
const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function WorkPage() {
    const [activeTag, setActiveTag] = useState("All");

    const filtered = useMemo(
        () =>
            activeTag === "All"
                ? projects
                : projects.filter((p) => p.tags.includes(activeTag)),
        [activeTag]
    );

    return (
        <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="mb-12 text-center">
                <span className="section-label">Portfolio</span>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mt-2 mb-4">
                    Our Work
                </h1>
                <p className="text-brand-muted text-lg max-w-xl mx-auto">
                    A collection of sites we&apos;ve designed and built for small businesses and brands.
                    Each one delivered fast, clean, and conversion-focused.
                </p>
            </div>

            {/* Tag filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter projects by tag">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${activeTag === tag
                            ? "bg-brand-blue border-brand-blue text-white shadow-md shadow-brand-blue/20"
                            : "bg-transparent border-brand-border text-brand-muted hover:border-brand-blue/40 hover:text-white"
                            }`}
                        id={`filter-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                        aria-pressed={activeTag === tag}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="text-center py-20 text-brand-muted">
                    No projects found for &ldquo;{activeTag}&rdquo;.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            )}

            {/* CTA */}
            <div className="text-center mt-16 p-10 bg-brand-surface border border-brand-border rounded-2xl">
                <h2 className="font-display font-bold text-2xl text-white mb-2">
                    Want to be next?
                </h2>
                <p className="text-brand-muted mb-6">
                    Book a free call and let&apos;s talk about your project.
                </p>
                <a
                    href="https://calendly.com/patsokoya17/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    id="work-page-cta"
                >
                    Book a Free Call →
                </a>
            </div>
        </div>
    );
}
