/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue Light"', '"Helvetica Light"', "Helvetica", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#080808",
          raised: "#0a0a0a",
          sunken: "#050505",
          elevated: "#111111",
        },
        accent: {
          DEFAULT: "#FFC800",
        },
      },
    },
  },
  plugins: [],
};
