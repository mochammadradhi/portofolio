import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#16130F] border-t border-white/8 px-6 lg:px-8 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-display text-white/30 text-sm">{profile.shortName}.</span>
        <span className="text-white/20 text-xs">
          © {new Date().getFullYear()} Mochammad Radhi Akbar. Built with Next.js & Tailwind CSS.
        </span>
        <span className="text-white/20 text-xs">Bandung 🇮🇩</span>
      </div>
    </footer>
  );
}
