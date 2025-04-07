module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // Assurez-vous que les chemins sont corrects
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13446d', // Assurez-vous que cette couleur est correctement définie
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
