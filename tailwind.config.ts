import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        "infinite-scroll" :"infinite-scroll 10s linear infinite",
      },
      keyframes:{
        "infinite-scroll" : {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      backgroundColor: {
        'bg-primary' : '#24273C',
        'bg-yellow' : '#F1A334'
      },
      textColor: {
        'text-yellow' : '#F1A334',
      },
      fontFamily:{
        'league' : 'League Spartan',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
