module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    colors: {
      'blue': 'hsl(221, 100%, 48%)',
      'blue-dark': 'hsl(226, 88%, 16%)',
      'red': 'hsl(335, 99%, 47%)',
      'gray-dark': '#273444',
      'gray': 'hsl(60, 7%, 95%)',
      'gray-light': '#d3dce6',
      'white': '#fff'
    },
    fontFamily: {
      sans: ['SharpSans', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['SharpSans', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['SharpSans', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['SharpSans', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['SharpSans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}