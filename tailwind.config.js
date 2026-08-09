/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8FAFC",
        ink: "#0F172A",
        "ink-soft": "#57667A",
        accent: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          soft: "#EAF1FF",
        },
        green: {
          DEFAULT: "#16A34A",
          soft: "#E9FBF1",
        },
        border: "#E4E9F1",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
        sans: ["Inter", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,.04), 0 12px 28px -12px rgba(15,23,42,.14)",
        "card-hover": "0 4px 10px rgba(15,23,42,.06), 0 24px 40px -14px rgba(37,99,235,.22)",
        float: "0 20px 60px -20px rgba(15,23,42,.35)",
      },
      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};
