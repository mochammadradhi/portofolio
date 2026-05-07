"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { profile, education, certifications } from "@/lib/data";

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={leftRef as React.RefObject<HTMLDivElement>}>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-px bg-[#2A5C8A]" />
              <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#2A5C8A]">About Me</span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight tracking-tight text-[#16130F] mb-6">
              Code that <em className="italic text-[#2A5C8A]">makes sense.</em>
            </h2>

            <div className="space-y-4 text-[0.95rem] text-[#5C5A56] leading-relaxed">
              <p>
                I&apos;m a <strong className="text-[#16130F] font-medium">Frontend Developer & Fullstack Engineer</strong> with 3+ years of experience building responsive, scalable web applications. I work comfortably across the entire stack — from designing RESTful APIs to crafting pixel-perfect interfaces.
              </p>
              <p>
                My stack of choice is <strong className="text-[#16130F] font-medium">React.js, Next.js, TypeScript,</strong> and <strong className="text-[#16130F] font-medium">Laravel</strong>. I&apos;m experienced in CI/CD pipelines, cross-browser compatibility, and Agile team collaboration.
              </p>
              <p>
                Beyond shipping code, I love mentoring junior developers, deep-diving into performance optimization, and exploring cutting-edge frontend techniques like 3D web with Three.js.
              </p>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-[#2A5C8A] text-white text-sm font-medium rounded-sm hover:bg-[#1E4268] transition-colors"
            >
              Let&apos;s Work Together
            </a>
          </div>

          {/* Right */}
          <div ref={rightRef as React.RefObject<HTMLDivElement>} className="space-y-4">
            {/* Education card */}
            <div className="bg-white border border-[#E2DDD8] rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#2A5C8A] mb-1">Education</div>
                  <div className="font-display text-lg text-[#16130F]">{education.degree}</div>
                  <div className="text-sm text-[#5C5A56]">{education.school} · {education.location}</div>
                </div>
                <span className="text-2xl">🎓</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#A8A5A0] border-t border-[#E2DDD8] pt-3 mt-3">
                <span>{education.period}</span>
                <span>·</span>
                <span className="text-[#2A5C8A] font-medium">GPA {education.gpa}</span>
              </div>
            </div>

            {/* Interests & soft skills */}
            <div className="bg-white border border-[#E2DDD8] rounded-xl p-5">
              <div className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#2A5C8A] mb-3">Soft Skills</div>
              <div className="flex flex-wrap gap-2">
                {["Communication", "Teamwork", "Adaptability", "Strong Learner", "Creative", "Hard Work", "Active Listening"].map((s) => (
                  <span key={s} className="text-[0.78rem] bg-[#F7F5F2] border border-[#E2DDD8] text-[#5C5A56] px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-[#E2DDD8] rounded-xl p-5">
              <div className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#2A5C8A] mb-3">Certifications</div>
              <ul className="space-y-2">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-[#5C5A56]">
                    <span className="text-[#2A5C8A] mt-0.5">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
