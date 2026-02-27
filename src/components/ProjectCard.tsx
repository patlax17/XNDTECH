import Image from "next/image";
import { Project } from "@/data/projects";

interface Props {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <article className="card-hover bg-brand-surface border border-brand-border rounded-2xl overflow-hidden flex flex-col">
            {/* Thumbnail */}
            <div className="relative h-44 bg-brand-bg flex items-center justify-center overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 33vw"
                    />
                ) : (
                    /* Placeholder with project initials */
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-blue/5">
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(91,127,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(91,127,255,0.1) 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                            }}
                        />
                        <span className="relative text-4xl font-display font-extrabold text-brand-blue/40 select-none">
                            {project.title
                                .split(" ")
                                .slice(0, 2)
                                .map((w) => w[0])
                                .join("")
                                .toUpperCase()}
                        </span>
                    </div>
                )}
                {/* Year badge */}
                <span className="absolute top-3 right-3 text-xs font-semibold bg-brand-bg/80 backdrop-blur border border-brand-border text-brand-muted px-2.5 py-1 rounded-full">
                    {project.year}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] font-semibold tracking-wide bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-2 py-0.5 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="font-display font-bold text-white text-base leading-snug">
                    {project.title}
                </h3>

                <p className="text-brand-muted text-sm leading-relaxed flex-1">
                    {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-2.5 pt-1">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-xs py-2 px-3.5 flex-1 justify-center"
                            id={`project-live-${project.slug}`}
                        >
                            Live Site ↗
                        </a>
                    )}
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs py-2 px-3.5 flex-1 justify-center"
                            id={`project-repo-${project.slug}`}
                        >
                            GitHub ↗
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
