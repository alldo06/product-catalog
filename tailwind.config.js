/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#363738',
          jasper: '#DB4444'
        },
        secondary: {
          floral: '#FEFAF1',
          green: '#00FF66',
          DEFAULT: '#F5F5F5'
        },
        lotion: {
          DEFAULT: '#FAFAFA'
        },
        gray: {
          DEFAULT: '#7D8184'
        },
        candypink: {
          DEFAULT: '#E07575'
        },
        cerulean: {
          DEFAULT: '#E0C4A0'
        },
        black: {
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#1A1A1A',
          DEFAULT: '#000000'
        },
        grey: {
          100: '#F0F0F1',
          200: '#E2E2E3',
          300: '#D3D3D4',
          400: '#C5C5C6',
          500: '#B6B7B8',
          600: '#A7A8AA',
          700: '#999A9C',
          800: '#8A8B8D',
          900: '#7C7D7F',
          DEFAULT: '#6D6E71'
        },
        danger: {
          main: '#DA001A',
          border: '#DC3D51',
          surface: '#FCA6B1'
        },
        success: {
          main: '#028654',
          border: '#45AF87',
          surface: '#A2D7C3'
        },
        warning: {
          main: '#FFBF00',
          border: '#FFD24D',
          surface: '#FFE599'
        },
        bw: {
          DEFAULT: '#0D0D0D',
          100: '#F2F2F2',
          200: '#CFCFCF',
          300: '#B6B6B6',
          400: '#9E9E9E',
          500: '#868686',
          600: '#6E6E6E',
          700: '#565656',
          800: '#3D3D3D',
          900: '#252525'
        }
      },
      padding: {
        13: '3.25rem',
        15: '3.75rem',
        25: '6.25rem'
      }
    }
  },
  plugins: []
}
