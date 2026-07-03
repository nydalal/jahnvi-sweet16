/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          950: '#0a0e27',
          900: '#1a1535',
          800: '#2d1b69',
          700: '#3d2680',
          600: '#5a3fa6',
          500: '#7c5aa2',
          400: '#9d7bb8',
          300: '#b8a0d1',
          200: '#d4c5e2',
          100: '#ede5f5',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
