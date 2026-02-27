import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedWork() {
    const featured = projects.slice(0, 3);

    return (
        <section id="work" className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                <div>
                    <span className="section-label">Portfolio</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
                        Featured Work
                    </h2>
                </div>
                <Link
                    href="/work"
                    className="btn-secondary text-sm px-5 py-2.5 self-start sm:self-auto"
                >
                    View All Projects →
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featured.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}
