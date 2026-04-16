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
        'fluid-h1': ['clamp(4rem, 12vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'fluid-h2': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'fluid-h3': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-body': ['clamp(0.875rem, 1vw, 0.875rem)', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'tech-label': ['10px', { letterSpacing: '0.25em', lineHeight: '1' }],
      },
      letterSpacing: {
        'blueprint': '0.25em',
        'tightest': '-0.05em',
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
