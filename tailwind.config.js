/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['variable(--font-inter)'],
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage: {
        'shiny-radial':
          'radial-gradient(50% 50% at 50% 50%, rgba(254, 110, 91, 0.5) 0%, rgba(217,217,217, 0) 100%)',
      },
      boxShadow: {
        'glass-big': 'inset 0 17px 5px -9px rgba(254, 110, 910,.05)',
        'glass-small': '5px 5px 20px 0px rgba(254, 110, 91,0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-diverse': 'spin-reverse 40s linear infinite',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
