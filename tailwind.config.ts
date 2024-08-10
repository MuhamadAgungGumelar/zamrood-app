import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Thesignature: ["Thesignature", "sans-serif"],
      },
      colors: {
        customGold: "#D6B66B",
        customBG: "#FAF9F5",
        customGreen: "#0B7373",
        customGreenBold: "#004040",
        customBGGold: "#D6B66B",
        customGray: "#B8B8B8",
      },
      fontSize: {
        customSize: "86px",
        customSize2: "128px",
        customSize3: "54px",
        customSize4: "84px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
