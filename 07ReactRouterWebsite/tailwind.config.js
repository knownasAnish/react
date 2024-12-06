/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveImage: 'move 20s linear infinite',
        moveImage1: 'move1 20s linear infinite',
        moveImage2: 'move2 20s linear infinite',
        moveImage3: 'move3 20s linear infinite',
      },
      keyframes: {
        move: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100%)'},
        },
        move1: {
          '0%': {transform: 'translate(0%)'},
          '100%': {transform: 'translateX(-100%)'}
        },
        move2: {
          '0%': {transform: 'translate(0%)'},
          '100%': {transform: 'translateX(100%)'}
        },
        move3: {
          '0%': {transform: 'translate(0%)'},
          '100%': {transform: 'translateX(-100%)'}
        },
      },
    },
  },
  plugins: [],
}

