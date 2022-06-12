module.exports = {
  mode: 'jit',
  purge: ["./**/*.html"],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,hbs,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
