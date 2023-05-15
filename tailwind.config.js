module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['./public/**/*.html'],
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'primary' : '#0c1829',
        'primary-light' : '#142338',
        'secondary' : '#1A79FF',
        'third' : '#2CDB66',
        'fourth' : '#FDD412',
        'orange' : '#FF7105'
      },
      fontSize : {
        '2xl' : ['24px', '24px'],
        '3xl' : ['32px', '42px'],
        '7xl' : ['80px', '96px']
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
        margin : '0 auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
