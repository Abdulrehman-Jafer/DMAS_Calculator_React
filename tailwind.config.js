/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-lg': 'inset 0 0 70px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}