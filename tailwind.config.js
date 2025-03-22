module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        secondary: '#56aaff'
      },
    },
  },
  pluggins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}