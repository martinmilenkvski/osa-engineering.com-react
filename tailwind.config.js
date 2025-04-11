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
      colors: {
        primary: {
          DEFAULT: "#EAB308", // yellow-500
          light: "#FBBF24", // yellow-400
          dark: "#D97706", // yellow-600
        },
        secondary: {
          DEFAULT: "#000000", // black
        },
      },
      spacing: {
        section: "8rem", // Consistent section spacing
        content: "4rem", // Consistent content spacing
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        marquee2: "marquee2 60s linear infinite",
        "fade-in": "fadeIn 1.5s ease-in-out",
        "fade-in-delay": "fadeIn 2s ease-in-out",
        "slide-in-up": "slideInUp 1.5s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInUp: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      borderRadius: {
        standard: "0.375rem", // Standard border radius
      },
    },
  },
  plugins: [],
};
