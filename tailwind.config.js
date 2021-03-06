module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        logo: ['Montserrat']
      },
      //backgroundImage: {
       // 'shopping-svg': "url('/assets/Shopping.svg')"
      //}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}