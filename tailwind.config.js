/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f2f2f2",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        sm: "415px",
        "2xl": "1320px",
      },
      lineHeight: {
        6.5: "26px",
      },
    },
  },
  plugins: [],
};
