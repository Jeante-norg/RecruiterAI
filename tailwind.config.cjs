/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
        brand: {
          // Official Assessment Palette
          accent1: "#A5D8FF",
          accent2: "#D0BCFF",
          accent3: "#B197FC",
          primary: "#3B82F6",
          bgLight: "#EFF6FF",
          bgDark: "#000000",
          secondaryBG: "#FFFFFF",
          secondary: "#F3F4F6",
          secondaryDark: "#404040",
          secondaryTextDark: "#737373",
        },
      },
    },
  },
  plugins: [],
};
