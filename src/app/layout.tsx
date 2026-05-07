import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mochammad Radhi Akbar — Frontend & Fullstack Developer",
  description:
    "Frontend Developer & Fullstack Engineer with 3+ years experience building responsive, scalable web applications using React.js, Next.js, and Laravel.",
  keywords: ["Frontend Developer", "Fullstack Engineer", "React.js", "Next.js", "Laravel", "Bandung"],
  authors: [{ name: "Mochammad Radhi Akbar" }],
  openGraph: {
    title: "Mochammad Radhi Akbar — Fullstack Developer",
    description: "Crafting fast, scalable, and beautiful web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
