"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { profile } from "@/lib/data";

const contactLinks = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/mochammadradhi",
    href: profile.github,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/mochammadradhi",
    href: profile.linkedin,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/62${profile.phone.replace(/^0/, "")}`,
  },
];

export default function Contact() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#16130F]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={leftRef as React.RefObject<HTMLDivElement>}>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-px bg-[#7BA7C8]" />
              <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#7BA7C8]">Contact</span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
              Let&apos;s build something{" "}
              <em className="italic text-[#7BA7C8]">great together.</em>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md">
              Have a project in mind, a question, or just want to say hi? I&apos;d love to hear from you. I&apos;m currently <strong className="text-emerald-400">available for freelance</strong> and full-time opportunities.
            </p>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 px-4 py-3 border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-wider text-white/30 mb-0.5">{link.label}</div>
                    <div className="text-sm">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef as React.RefObject<HTMLDivElement>} style={{ transitionDelay: "120ms" }}>
            <div className="space-y-4">
              <div>
                <label className="text-[0.7rem] font-medium uppercase tracking-widest text-white/35 block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Budi Santoso"
                  className="w-full bg-white/5 border border-white/12 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-[#2A5C8A]/60 transition-colors font-body"
                />
              </div>
              <div>
                <label className="text-[0.7rem] font-medium uppercase tracking-widest text-white/35 block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="budi@example.com"
                  className="w-full bg-white/5 border border-white/12 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-[#2A5C8A]/60 transition-colors font-body"
                />
              </div>
              <div>
                <label className="text-[0.7rem] font-medium uppercase tracking-widest text-white/35 block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Collaboration"
                  className="w-full bg-white/5 border border-white/12 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-[#2A5C8A]/60 transition-colors font-body"
                />
              </div>
              <div>
                <label className="text-[0.7rem] font-medium uppercase tracking-widest text-white/35 block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/12 rounded-md px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-[#2A5C8A]/60 transition-colors resize-none font-body"
                />
              </div>
              <button
                type="button"
                className="px-6 py-2.5 bg-[#2A5C8A] hover:bg-[#1E4268] text-white text-sm font-medium rounded-sm transition-colors"
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
