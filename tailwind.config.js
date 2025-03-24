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
        primary: '#13446d',
        secondary: '#154c79'
      },
    },
  },
  pluggins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}