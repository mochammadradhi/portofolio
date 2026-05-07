"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { projects } from "@/lib/data";

const FEATURED = projects.slice(0, 4);

export default function Projects() {
  const headRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-px bg-[#2A5C8A]" />
              <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#2A5C8A]">
                Projects
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight tracking-tight text-[#16130F]">
              Selected Work
            </h2>
            <p className="mt-2 text-[#5C5A56] text-sm max-w-lg leading-relaxed">
              A selection of real projects I&apos;ve built — from concept to
              deployment.
            </p>
          </div>

          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[#2A5C8A] border border-[#2A5C8A]/30 px-4 py-2 rounded-sm hover:bg-[#E6EFF7] transition-colors"
          >
            View All Projects
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {/* Grid: 2 cols on md+, first card is wide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURED.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              delay={i * 80}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  delay,
  featured,
}: {
  project: (typeof projects)[0];
  delay: number;
  featured: boolean;
}) {
  const ref = useScrollReveal();

  return (
    <Link
      href={`/projects/${project.slug}`}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group bg-white border border-[#E2DDD8] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden shrink-0 ${
          featured ? "md:w-[55%] h-52 md:h-auto" : "h-48"
        }`}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={
            featured
              ? "(max-width:768px) 100vw, 55vw"
              : "(max-width:768px) 100vw, 50vw"
          }
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#16130F]/10 group-hover:bg-[#16130F]/0 transition-colors" />
        {/* Year badge */}
        <span className="absolute top-3 right-3 text-[0.68rem] font-semibold bg-white/90 backdrop-blur-sm text-[#16130F] px-2.5 py-1 rounded-full">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[0.65rem] font-semibold uppercase tracking-wider bg-[#E6EFF7] text-[#2A5C8A] px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-display text-[1.15rem] text-[#16130F] mb-2 leading-snug group-hover:text-[#2A5C8A] transition-colors">
          {project.title}
        </h3>
        <p className="text-[0.85rem] text-[#5C5A56] leading-relaxed flex-1 line-clamp-3">
          {project.shortDesc}
        </p>

        <div className="mt-5 pt-4 border-t border-[#E2DDD8] flex items-center justify-between">
          <span className="text-[0.75rem] text-[#A8A5A0]">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[0.8rem] font-medium text-[#2A5C8A]">
            View Details
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
