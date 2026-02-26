import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        mute: "#5f6368",
        line: "rgba(18, 18, 18, 0.12)",
        accent: "#3f5a4a",
        accentSoft: "#eef2ee",
        surface: "#ffffff"
      },
      boxShadow: {
        soft: "0 14px 42px rgba(17, 17, 17, 0.06), 0 2px 8px rgba(17, 17, 17, 0.04)"
      },
      borderRadius: {
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
