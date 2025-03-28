/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Helvetica Neue Light"',
          '"Helvetica Light"',
          "Helvetica",
          "sans-serif",
        ],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-in": "fadeIn 1.5s ease-in-out",
        "fade-in-delay": "fadeIn 2s ease-in-out",
        "slide-in-up": "slideInUp 1.5s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
