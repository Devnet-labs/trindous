import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0c0c",
        mist: "#d7e2ea",
        navy: {
          50: "#f1f5fa",
          100: "#dde7f1",
          200: "#bccfe3",
          300: "#8fadcd",
          400: "#5b85b1",
          500: "#3a6797",
          600: "#2b507c",
          700: "#234064",
          800: "#1d3553",
          900: "#0f1f36",
          950: "#081427",
        },
        teal: {
          400: "#3dd0d9",
          500: "#17b8c4",
          600: "#0f97a3",
        },
        accent: "#1a73a8",
      },
      fontFamily: {
        sans: ["Kanit", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Kanit", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(23,184,196,0.25), 0 20px 50px -20px rgba(23,184,196,0.45)",
        soft: "0 10px 30px -12px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(23,184,196,0.18), transparent 60%), linear-gradient(180deg, #06101f 0%, #081427 100%)",
        "hero-radial":
          "radial-gradient(60% 60% at 20% 10%, rgba(23,184,196,0.18) 0%, transparent 60%), radial-gradient(40% 40% at 90% 30%, rgba(26,115,168,0.20) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
