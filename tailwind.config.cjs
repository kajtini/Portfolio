/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#262730",
        primary: "#1A1A1A",
        side: "#ED3AB5",
        white: "hsl(0, 0%, 100%)",
        // side: "#D33F49",
        light: "#8F1E84",
        // light: "#E3D8D1",
      },
      fontFamily: {
        primary: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
