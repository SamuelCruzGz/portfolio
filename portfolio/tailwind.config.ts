// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.css" 
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f0ff',
        'neon-pink': '#ff4bf2',
        'neon-green': '#00ff99',
        'neon-fucsia': '#ff00c8',
        'electric-cyan': '#00f7ff',
        'background-gray': '#080808',
        'secondary-grey': '#c7c7c7',
        'color-font': '#d9d9e3'
      },
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
        game: ['"VT323"', 'sans-serif']
      },
    },
  },
  plugins: [],
};

export default config;