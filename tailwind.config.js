/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'matte-black': '#0A0A0A',
        charcoal: '#1C1C1C',
        beige: '#F5F0E6',
        cream: '#F5EFE0',
        purple: '#6B5B95',
        plum: '#4B3F72',
        // Light mode brand palette
        'lm-bg': '#F5EFE0',
        'lm-card': '#FDF8F0',
        'lm-heading': '#3D2B6B',
        'lm-text': '#2C2C2C',
        'lm-subtext': '#5A5A6A',
        'lm-purple': '#6B5B95',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        manrope: ['var(--font-manrope)'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
