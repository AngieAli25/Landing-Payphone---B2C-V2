import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#a03478",
          violetDark: "#7a1f5c",
          blue: "#00b7ff",
          blueLight: "#d4f1ff",
          orange: "#F76a00",
          text: "#181818",
          grayLight: "#f5f5f5",
          success: "#10b981",
          alert: "#ef4444",
        },
      },
      backgroundImage: {
        hero: "linear-gradient(135deg, #a03478 0%, #F76a00 100%)",
        cta: "linear-gradient(90deg, #00b7ff 0%, #a03478 100%)",
        banner: "linear-gradient(90deg, #a03478 0%, #F76a00 100%)",
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(160,52,120,0.2), 0 10px 25px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;

