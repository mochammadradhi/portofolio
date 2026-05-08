"use client";

import { useEffect, useRef } from "react";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let raf: number;
    const animate = () => {
      frame += 0.3;
      if (ringRef.current)
        ringRef.current.style.transform = `rotate(${frame}deg)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="min-h-screen grid lg:grid-cols-2 pt-16">
      {/* Left */}
      <div
        className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0"
        style={{ animation: "fadeUp 0.9s ease 0.1s both" }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-7 h-px bg-[#2A5C8A]" />
          <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#2A5C8A]">
            {profile.title}
          </span>
        </div>

        <h1 className="font-display text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.08] tracking-tight text-[#16130F] mb-6">
          Building <em className="italic text-[#2A5C8A]">elegant</em>
          <br />
          digital products.
        </h1>

        <p className="text-[1.05rem] text-[#5C5A56] max-w-md leading-relaxed mb-8">
          Hi, I&apos;m{" "}
          <strong className="text-[#16130F] font-medium">Radhi</strong> — a
          fullstack developer based in{" "}
          <strong className="text-[#16130F] font-medium">Bandung</strong>. I
          craft fast, accessible, and beautifully designed web experiences from
          frontend to backend.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#16130F] text-white text-sm font-medium rounded-sm hover:bg-[#2A5C8A] transition-colors"
          >
            View My Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E2DDD8] text-[#16130F] text-sm font-medium rounded-sm hover:border-[#2A5C8A] hover:text-[#2A5C8A] transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl text-[#2A5C8A]">
                {s.num}
              </div>
              <div className="text-[0.75rem] text-[#A8A5A0] mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — visual */}
      <div
        className="relative flex items-center justify-center overflow-hidden min-h-[400px]"
        style={{ animation: "fadeUp 1s ease 0.35s both" }}
      >
        {/* Background grid decoration */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#16130F 1px, transparent 1px), linear-gradient(90deg, #16130F 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative w-72 h-72 lg:w-80 lg:h-80">
          {/* Outer dashed ring */}
          <div
            ref={ringRef}
            className="absolute inset-0 rounded-full border border-dashed border-[#2A5C8A]/25"
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#2A5C8A]" />
          </div>

          {/* Inner solid ring */}
          <div className="absolute inset-4 rounded-full border border-[#E2DDD8]" />

          {/* Avatar */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#E6EFF7] to-[#C8D8EC] flex items-center justify-center overflow-hidden">
            <span className="font-display text-6xl text-[#2A5C8A]/40 select-none">
              RA
            </span>
          </div>

          {/* Badge: Available */}
          <div className="absolute bottom-4 -right-4 bg-white border border-[#E2DDD8] rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-medium shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.2)] animate-pulse" />
            Available for Work
          </div>

          {/* Badge: Location */}
          <div className="absolute top-6 -left-4 bg-white border border-[#E2DDD8] rounded-lg px-3 py-2 shadow-md">
            <div className="text-[0.7rem] text-[#A8A5A0] mb-0.5">Based in</div>
            <div className="text-xs font-semibold text-[#16130F]">
              🇮🇩 Bandung, ID
            </div>
          </div>
        </div>

        {/* Floating tech stack pills */}
        <div
          className="absolute bottom-10 left-8 bg-white border border-[#E2DDD8] rounded-lg px-4 py-2 shadow-sm"
          style={{ animation: "fadeUp 1s ease 0.7s both" }}
        >
          <div className="text-[0.7rem] text-[#A8A5A0] mb-1">Primary Stack</div>
          <div className="flex gap-1.5">
            {["React", "Next.js", "Laravel"].map((t) => (
              <span
                key={t}
                className="text-[0.68rem] bg-[#E6EFF7] text-[#2A5C8A] px-2 py-0.5 rounded-full font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
