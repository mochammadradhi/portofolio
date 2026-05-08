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
              <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#2A5C8A]">
                About Me
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight tracking-tight text-[#16130F] mb-6">
              Code that <em className="italic text-[#2A5C8A]">makes sense.</em>
            </h2>

            <div className="space-y-4 text-[0.95rem] text-[#5C5A56] leading-relaxed">
              <p>
                I’m a{" "}
                <strong className="text-[#16130F] font-medium">
                  Frontend & Fullstack Engineer
                </strong>{" "}
                with 3+ years in the trenches of building responsive, scalable
                web apps. I don’t just bridge the gap between frontend and
                backend; I enjoy the challenge of making them work together
                seamlessly.
              </p>
              <p>
                My go-to stack is{" "}
                <strong className="text-[#16130F] font-medium">
                  React, Next.js, TypeScript,
                </strong>{" "}
                and{" "}
                <strong className="text-[#16130F] font-medium">Laravel</strong>.
                From designing RESTful APIs to ensuring cross-browser stability,
                I focus on writing code that scales and interfaces that actually
                feel right.
              </p>
              <p>
                Whether I’m optimizing pushing the boundaries of the web with ,
                I’m driven by the technical "how" and the "why." To me, a
                project isn’t finished until the performance is tuned and the
                code is as clean as the UI.
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
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className="space-y-4"
          >
            {/* Education card */}
            <div className="bg-white border border-[#E2DDD8] rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#2A5C8A] mb-1">
                    Education
                  </div>
                  <div className="font-display text-lg text-[#16130F]">
                    {education.degree}
                  </div>
                  <div className="text-sm text-[#5C5A56]">
                    {education.school} · {education.location}
                  </div>
                </div>
                <span className="text-2xl">🎓</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#A8A5A0] border-t border-[#E2DDD8] pt-3 mt-3">
                <span>{education.period}</span>
                <span>·</span>
                <span className="text-[#2A5C8A] font-medium">
                  GPA {education.gpa}
                </span>
              </div>
            </div>

            {/* Interests & soft skills */}
            <div className="bg-white border border-[#E2DDD8] rounded-xl p-5">
              <div className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#2A5C8A] mb-3">
                Soft Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Communication",
                  "Teamwork",
                  "Adaptability",
                  "Strong Learner",
                  "Creative",
                  "Hard Work",
                  "Active Listening",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-[0.78rem] bg-[#F7F5F2] border border-[#E2DDD8] text-[#5C5A56] px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-[#E2DDD8] rounded-xl p-5">
              <div className="text-[0.72rem] font-semibold tracking-widest uppercase text-[#2A5C8A] mb-3">
                Certifications
              </div>
              <ul className="space-y-2">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-[#5C5A56]"
                  >
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
