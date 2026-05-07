import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Mochammad Radhi Akbar",
  description: "All projects built by Radhi — fullstack web apps, 3D experiences, CMS, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      {/* Back nav */}
      <div className="border-b border-[#E2DDD8] bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#5C5A56] hover:text-[#2A5C8A] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span className="text-[#E2DDD8]">/</span>
          <span className="text-sm text-[#16130F] font-medium">All Projects</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#2A5C8A]" />
            <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#2A5C8A]">
              All Projects
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-tight tracking-tight text-[#16130F]">
            Work I&apos;ve Built
          </h1>
          <p className="mt-3 text-[#5C5A56] text-sm max-w-lg leading-relaxed">
            {projects.length} projects across fullstack apps, interactive 3D experiences, CMS platforms, and landing pages.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group bg-white border border-[#E2DDD8] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#16130F]/10 group-hover:bg-[#16130F]/0 transition-colors" />
                <span className="absolute top-3 right-3 text-[0.68rem] font-semibold bg-white/90 text-[#16130F] px-2.5 py-1 rounded-full">
                  {p.year}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[0.65rem] font-semibold uppercase tracking-wider bg-[#E6EFF7] text-[#2A5C8A] px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-display text-[1.05rem] text-[#16130F] mb-2 leading-snug group-hover:text-[#2A5C8A] transition-colors">
                  {p.title}
                </h2>
                <p className="text-[0.83rem] text-[#5C5A56] leading-relaxed flex-1 line-clamp-2">
                  {p.shortDesc}
                </p>
                <div className="mt-4 pt-4 border-t border-[#E2DDD8] flex items-center justify-between">
                  <span className="text-[0.72rem] text-[#A8A5A0]">{p.category}</span>
                  <span className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-[#2A5C8A]">
                    Details
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
