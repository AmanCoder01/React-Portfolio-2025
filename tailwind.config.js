/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1fe81c",

      },
      wordSpacing: {
        tight: '-0.05em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const wordSpacing = theme('wordSpacing');
      const utilities = Object.entries(wordSpacing).map(([key, value]) => ({
        [`.word-spacing-${key}`]: {
          wordSpacing: value,
        },
      }));

      addUtilities(utilities, ['responsive']);
    },
  ],
}