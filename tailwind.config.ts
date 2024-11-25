/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: '#39FF14',
        'neon-glow': '#39FF1480',
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.neon"), 0 0 20px theme("colors.neon-glow")',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px theme("colors.neon"), 0 0 20px theme("colors.neon-glow")' },
          '50%': { boxShadow: '0 0 20px theme("colors.neon"), 0 0 40px theme("colors.neon-glow")' },
        },
      },
    },
  },
  plugins: [],
}
