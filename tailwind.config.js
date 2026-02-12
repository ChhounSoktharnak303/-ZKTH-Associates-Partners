/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        zkth: {
          navy: '#0F172A',
          blue: '#2563EB',
          gold: '#C5A059',
          slate: '#64748B',
          light: '#F8FAFC'
        }
      }
    },
  },
  plugins: [],
}