"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  const headRef = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#2A5C8A]" />
            <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#2A5C8A]">Experience</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight tracking-tight text-[#16130F]">
            Where I&apos;ve Worked
          </h2>
        </div>

        <div className="relative pl-6 border-l border-[#E2DDD8] space-y-12">
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, delay }: { exp: (typeof experiences)[0]; delay: number }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[1.875rem] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#2A5C8A]" />

      <div className="text-[0.75rem] font-semibold tracking-wider uppercase text-[#2A5C8A] mb-1">
        {exp.period}
      </div>
      <div className="font-display text-[1.15rem] text-[#16130F] mb-0.5">{exp.role}</div>
      <div className="text-sm text-[#A8A5A0] mb-4">
        {exp.company} · {exp.type}
      </div>

      <ul className="space-y-2">
        {exp.highlights.map((h, j) => (
          <li key={j} className="flex items-start gap-2 text-[0.88rem] text-[#5C5A56] leading-relaxed">
            <span className="text-[#2A5C8A] shrink-0 mt-0.5">→</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
