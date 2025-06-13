import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        md: "810px",
        xl: "1440px"
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        savate: ["Savate", "serif"]
      }
    }
  }
};

export default config;
