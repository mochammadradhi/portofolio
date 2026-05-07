"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { skills } from "@/lib/data";

export default function Skills() {
  const headRef = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef as React.RefObject<HTMLDivElement>} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#2A5C8A]" />
            <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#2A5C8A]">Skills</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight tracking-tight text-[#16130F]">
            My Tech Stack
          </h2>
          <p className="mt-3 text-[#5C5A56] text-sm max-w-lg leading-relaxed">
            Technologies I work with daily to build full-featured, production-ready web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <SkillGroup key={group.category} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ group, delay }: { group: (typeof skills)[0]; delay: number }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className="bg-[#F7F5F2] border border-[#E2DDD8] rounded-xl p-5 hover:shadow-md transition-shadow"
    >
      <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#A8A5A0] mb-3 pb-3 border-b border-[#E2DDD8]">
        {group.category}
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1.5 text-[0.8rem] bg-white border border-[#E2DDD8] text-[#16130F] px-3 py-1 rounded-full hover:border-[#2A5C8A] hover:text-[#2A5C8A] hover:bg-[#E6EFF7] transition-colors cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A5C8A]/40" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
