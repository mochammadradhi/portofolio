import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Radhi Akbar`,
    description: project.shortDesc,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      {/* Sticky top bar */}
      <div className="border-b border-[#E2DDD8] bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center gap-3">
          <Link href="/" className="text-sm text-[#5C5A56] hover:text-[#2A5C8A] transition-colors flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Home
          </Link>
          <span className="text-[#E2DDD8]">/</span>
          <Link href="/projects" className="text-sm text-[#5C5A56] hover:text-[#2A5C8A] transition-colors">Projects</Link>
          <span className="text-[#E2DDD8]">/</span>
          <span className="text-sm text-[#16130F] font-medium truncate">{project.title}</span>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16130F]/70 via-[#16130F]/20 to-transparent" />

        {/* Hero text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((t) => (
              <span key={t} className="text-[0.68rem] font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white leading-tight tracking-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main content */}
          <div>
            {/* Overview */}
            <div className="mb-10">
              <SectionLabel>Overview</SectionLabel>
              <p className="text-[#5C5A56] leading-relaxed text-[0.95rem]">{project.overview}</p>
            </div>

            {/* Challenge */}
            <div className="mb-10">
              <SectionLabel>The Challenge</SectionLabel>
              <p className="text-[#5C5A56] leading-relaxed text-[0.95rem]">{project.challenges}</p>
            </div>

            {/* Solution */}
            <div className="mb-10">
              <SectionLabel>The Solution</SectionLabel>
              <p className="text-[#5C5A56] leading-relaxed text-[0.95rem]">{project.solution}</p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <SectionLabel>Key Features</SectionLabel>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.88rem] text-[#5C5A56]">
                    <span className="w-5 h-5 rounded-full bg-[#E6EFF7] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2A5C8A" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div>
                <SectionLabel>Gallery</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-[#E2DDD8]">
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width:640px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-white border border-[#E2DDD8] rounded-xl p-6 sticky top-20 space-y-5">
              <div>
                <div className="text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] mb-1">Category</div>
                <div className="text-sm font-medium text-[#16130F]">{project.category}</div>
              </div>
              <div>
                <div className="text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] mb-1">Duration</div>
                <div className="text-sm font-medium text-[#16130F]">{project.duration}</div>
              </div>
              <div>
                <div className="text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] mb-1">Role</div>
                <div className="text-sm font-medium text-[#16130F]">{project.role}</div>
              </div>
              <div>
                <div className="text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="text-[0.72rem] bg-[#E6EFF7] text-[#2A5C8A] px-2.5 py-1 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="pt-4 border-t border-[#E2DDD8] space-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 w-full px-4 py-2.5 bg-[#2A5C8A] text-white text-sm font-medium rounded-sm hover:bg-[#1E4268] transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 w-full px-4 py-2.5 border border-[#E2DDD8] text-[#16130F] text-sm font-medium rounded-sm hover:border-[#2A5C8A] hover:text-[#2A5C8A] transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      GitHub Repo
                    </a>
                  )}
                </div>
              )}

              {/* CTA */}
              <div className="pt-4 border-t border-[#E2DDD8]">
                <p className="text-[0.78rem] text-[#A8A5A0] mb-3">Interested in working together?</p>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#16130F] text-white text-sm font-medium rounded-sm hover:bg-[#2A5C8A] transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-16 pt-10 border-t border-[#E2DDD8] grid grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="group flex flex-col gap-1 p-4 bg-white border border-[#E2DDD8] rounded-xl hover:border-[#2A5C8A]/40 hover:shadow-md transition-all">
              <span className="text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                Previous
              </span>
              <span className="font-display text-[0.95rem] text-[#16130F] group-hover:text-[#2A5C8A] transition-colors line-clamp-1">{prev.title}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/projects/${next.slug}`} className="group flex flex-col gap-1 p-4 bg-white border border-[#E2DDD8] rounded-xl hover:border-[#2A5C8A]/40 hover:shadow-md transition-all text-right ml-auto w-full">
              <span className="text-[0.68rem] uppercase tracking-widest text-[#A8A5A0] flex items-center gap-1 justify-end">
                Next
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
              <span className="font-display text-[0.95rem] text-[#16130F] group-hover:text-[#2A5C8A] transition-colors line-clamp-1">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[1.1rem] text-[#16130F] mb-3 flex items-center gap-2">
      <span className="block w-4 h-px bg-[#2A5C8A]" />
      {children}
    </h2>
  );
}
