module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#3897c8",
          dark: "#083c5c",
        },
        orange: {
          DEFAULT: "#f4a94f",
        },
      },
      fontFamily: {
        highlighted: ["Anton", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
