/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'x-large': '80px',
        'big': '100px',
        'x-big': '150px',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

