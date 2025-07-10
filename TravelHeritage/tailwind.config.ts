@type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'ladakh-blue': 'hsl(213, 78%, 54%)',
        'ladakh-deep': 'hsl(216, 69%, 47%)',
        'karnataka-orange': 'hsl(22, 89%, 49%)',
        'karnataka-gold': 'hsl(45, 93%, 47%)',
        'heritage-brown': 'hsl(30, 89%, 28%)',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(20, 14.3%, 4.1%)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
}
