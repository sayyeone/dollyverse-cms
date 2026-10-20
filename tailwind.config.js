/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121316",
        navy: "#2F3552",
        indigo: "#4A3C9E",
        violet: "#8E7CF0",
        lilac: "#EDE9FE",
        gold: "#E0A92E",
        cream: "#F6E7C1",
        paper: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};
