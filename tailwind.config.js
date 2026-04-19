/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cs: {
          darkGreen: "#1C3E2D",
          goldDark: "#B48E66",
          cream: "#FDFBF3",
        }
      },
      fontFamily: {
        // Fonte elegante para títulos (Autoridade/Advocacia)
        serif: ['"Playfair Display"', 'serif'],
        // Fonte moderna e limpa para textos
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(28, 62, 45, 0.15)',
        'premium-hover': '0 20px 40px -10px rgba(28, 62, 45, 0.25)',
      }
    },
  },
  plugins: [],
}