/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens :{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl:  '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%,59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 30%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        brightGreen: 'hsl(144, 62%, 59%)',
        brightGreenLight: 'hsl(144, 62%, 69%)',
        brightGreenSupLight: 'hsl(144, 62%, 90%)',
        veryPaleGreen: 'hsl(144, 100%, 96%)'
      }
    },
  },
  plugins: [],
}
