/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sage: "#C0C999",
        yellow: "#FFE14C",
        green: "#2C6E49",
        "green-light": "#57CC99",
        grey: {
          1000: "#0A0A0A",
          900: "#121112",
          800: "#1B1819",
          700: "#262424",
          600: "#3C3839",
          500: "#534D4E",
          400: "#797072",
          300: "#B8B2B3",
          200: "#D6D2D3",
          100: "#E3E1E1",
          50: "#EDEBEC",
          1: "#0A0A0A",
          0: "#FFFFFF",
        },
        primary: "#C051FF",
      },
      screens: {
        md: { min: "880px" },
        lg: { min: "1300px" },
      },
    },
  },
  plugins: [],
};
