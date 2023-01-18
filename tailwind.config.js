/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      tea: {
        50: "#F7F0D4",
        100: "#F0E0A8",
        200: "#E8D17D",
        300: "#E0C152",
        400: "#D8B227",
        500: "#AD8E1F",
        600: "#826B17",
        700: "#57470F",
        800: "#2B2408",
        900: "#1B1B1B",
      },
      sky: {
        50: "#DDECEE",
        100: "#BBD9DD",
        200: "#99C6CC",
        300: "#77B3BB",
        400: "#56A0A9",
        500: "#98c5cb",
        600: "#448088",
        700: "#336066",
        800: "#224044",
        900: "#112022",
      },
      violet: {
        50: "#e7d2d0",
        100: "#dbbcbe",
        200: "#c596a7",
        300: "#ae7497",
        400: "#97588c",
        500: "#7f407f",
        600: "#602c68",
        700: "#451c51",
        800: "#2d1039",
        900: "#190722",
      },
    },
    fontFamily: {
      body: ["Mulish", "sans-serif"],
      titles: ["DM Serif Display", "serif"],
      sans: ["DM Serif Display", "sans-serif"],
    },
    backgroundImage: {
      "massage-preface":
        "url('/assets/images/sala-massagens-dioni-mara-1.webp')",
      massage: "url('/assets/images/dioni-mara-executa-massagem.webp')",
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/aspect-ratio")],
};
