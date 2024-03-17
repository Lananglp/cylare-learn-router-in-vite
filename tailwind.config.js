/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'circle-shadow': 'radial-gradient(circle, rgba(244, 63, 94,0.10) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)',
      }
    },
  },
  plugins: [],
}