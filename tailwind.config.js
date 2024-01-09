/** @type {import('tailwindcss').Config} */
import adapter from '@sveltejs/adapter-static';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin"', "sans-serif"],
        lato: ['"Lato"', "sans-serif"]
      },
    }
  },
  kit: {
    adapter: adapter(),
    files: {
      assets: 'static'
    },
  },
  plugins: []
};