/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hive-blue': '#3b82f6', // blue-500
        'hive-slate': '#0f172a',
        'hive-blue-light': '#60a5fa', // blue-400 for highlights
        'hive-blue-dark': '#1e40af', // blue-700 for darker accents
      },
      backgroundImage: {
        'gradient-hive': 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #0f172a)', // slate-900, blue-900, slate-900
      },
      fontFamily: {
        'arabic': ['Cairo', 'Amiri', 'Noto Sans Arabic', 'Tajawal', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      direction: {
        'rtl': 'rtl',
        'ltr': 'ltr',
      }
    },
  },
  plugins: [],
} 