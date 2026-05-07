/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#F7F5F2",
        ink: {
          DEFAULT: "#16130F",
          light: "#5C5A56",
          muted: "#A8A5A0",
        },
        accent: {
          DEFAULT: "#2A5C8A",
          light: "#E6EFF7",
          dark: "#1E4268",
        },
        border: "#E2DDD8",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        pulse: "pulse 2s ease infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
