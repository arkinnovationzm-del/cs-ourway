module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'ui-sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#dbeaff',
          200: '#b8d0ff',
          300: '#7fb4ff',
          500: '#2f6aff',
          700: '#1b4bd6',
        },
      },
      boxShadow: {
        glow: '0 0 14px rgba(99, 102, 241, 0.6), 0 8px 28px rgba(0,0,0,0.4)',
        cardGlow: '0 20px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0)' },
        },
        scrollReveal: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        scrollReveal: 'scrollReveal 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};