/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg: '#fff2e5',
        bgDark: '#2b2b2b',
        bg2: '#FFFAF4',
        btn: '#ff441f',
        btn2: '#ED2703',
        title: '#F1550D',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
