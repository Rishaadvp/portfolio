/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-bg': 'rgba(15, 23, 42, 0.6)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'accent-cyan': '#22d3ee',
        'accent-purple': '#c084fc'
      }
    },
  },
  plugins: [],
}

