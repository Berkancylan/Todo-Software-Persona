/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Burası çok kritik, Pages ve Components klasörlerini bu sayede tarar
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}