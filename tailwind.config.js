/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Outfit", "sans-serif"],
      },
      fontSize: {
        'fluid-h1': 'clamp(3rem, 10vw, 8rem)',
        'fluid-h2': 'clamp(2.5rem, 6vw, 5rem)',
        'fluid-h3': 'clamp(1.5rem, 4vw, 3rem)',
        'fluid-body': 'clamp(0.875rem, 1vw, 1rem)',
        'tech-label': ['12px', { letterSpacing: '0.2em' }],
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
