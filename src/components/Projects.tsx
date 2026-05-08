"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { projects } from "@/lib/data";

const FEATURED = projects.slice(0, 4);

export default function Projects() {
  const headRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto">
        {/* Header - Dibuat lebih clean */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-[#2A5C8A]" />
              <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#2A5C8A]">
                Selected Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-[#16130F]">
              Crafting Digital <br /> Solutions
            </h2>
          </div>

          <Link
            href="/projects"
            className="group shrink-0 inline-flex items-center gap-3 text-sm font-semibold text-[#16130F] group"
          >
            <span className="relative">
              View All Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2A5C8A] transition-all group-hover:w-full" />
            </span>
            <div className="p-2 rounded-full border border-[#E2DDD8] group-hover:bg-[#16130F] group-hover:text-white transition-all">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Grid: Modern Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {FEATURED.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              delay={i * 100}
              // Card pertama lebar penuh (12 col), sisanya setengah (6 col)
              gridClass={i === 0 ? "md:col-span-12" : "md:col-span-6"}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, gridClass, featured }: any) {
  const ref = useScrollReveal();

  return (
    <Link
      href={`/projects/${project.slug}`}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative bg-white border border-[#E2DDD8]/60 rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col ${gridClass} ${
        featured ? "md:flex-row md:min-h-[450px]" : "h-full"
      }`}
    >
      {/* Thumbnail Wrapper */}
      <div
        className={`relative overflow-hidden shrink-0 ${
          featured ? "md:w-[60%] h-64 md:h-auto" : "h-64"
        }`}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16130F]/20 to-transparent opacity-60" />

        <span className="absolute top-4 left-4 text-[0.65rem] font-bold bg-[#16130F] text-white px-3 py-1 rounded-full tracking-widest">
          {project.year}
        </span>
      </div>

      {/* Content Body */}
      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((t: string) => (
              <span
                key={t}
                className="text-[10px] font-bold uppercase tracking-wider text-[#A8A5A0] border border-[#E2DDD8] px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="font-display text-2xl text-[#16130F] mb-3 group-hover:text-[#2A5C8A] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[0.9rem] text-[#5C5A56] leading-relaxed mb-6 line-clamp-3 font-light">
            {project.shortDesc}
          </p>
        </div>

        <div className="pt-6 border-t border-[#F0EEEC] flex items-center justify-between">
          <span className="text-[0.7rem] font-medium uppercase tracking-widest text-[#A8A5A0]">
            {project.category}
          </span>

          <div className="flex items-center gap-2 text-xs font-bold text-[#16130F] uppercase tracking-tighter">
            Explore Project
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FBFBFA] group-hover:bg-[#2A5C8A] group-hover:text-white transition-colors">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
