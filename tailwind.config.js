/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "serif"], // 'CustomFont' must match the @font-face name
        ovo: ["Ovo", "serif"],
      },
    },
  },
  plugins: [],
};
