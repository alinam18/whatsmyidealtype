/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      keyframes: {
        'blob-move': {
          '0%, 100%': {
            transform: 'translate(-50%, 0%) rotate(30deg)',
          },
          '50%': {
            transform: 'translate(10%, 0%) rotate(20deg)',
          },
        },
      },
      animation: {
        'blob-move': 'blob-move 14s ease-in-out infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
