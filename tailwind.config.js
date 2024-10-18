const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cover-hero": "url('/img/bg-cover.jpg')",
        "cover-welcome": "url('/img/bg-welcome.gif')",
        "cover-end": "url('/img/bg-end.jpg')",
        "cover-dates": "url('/img/55.jpeg')",
        "card-ovi": "url('/img/bg-ovi.png')",
        "card-wildan": "url('/img/bg-wildan.png')",
      },
    },
    colors: {
      ...colors,
      grey: {
        900: "#343434",
      },
      primary: {
        200: "#D77636",
        300: "#e48747",
        400: "#CC5608",
        900: "#cc6a2b",
      },
      secondary: {
        200: "#3D5690",
        300: "#2C4681",
        400: "#245d78",
        900: "#122A62",
      },
    },
  },
  plugins: [],
};
