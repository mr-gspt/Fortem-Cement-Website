// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  // dark mode removed here
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // in case you still use Pages Router
    "./components/**/*.{js,ts,jsx,tsx}" // your components folder
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#7dd3fc",
          DEFAULT: "#0ea5e9",
          dark: "#0369a1",
        },
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
});
