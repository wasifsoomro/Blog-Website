import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url(/tech3.jpg)",
      },
      fontFamily: {
        roboto: [ "Roboto"],
        poppins: ["Poppins"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      trailingSlash: false,
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
