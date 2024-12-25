/** @type {import('tailwindcss').Config} */
import TailwindCssPrimeUI from 'tailwindcss-primeui'

export default {
  content: ['./index.html', './src/**/*.{html,js,vue,ts}'],
  theme: {
    extend: {},
  },
  plugins: [TailwindCssPrimeUI],
}
