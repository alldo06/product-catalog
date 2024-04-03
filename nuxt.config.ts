// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    './modules/auto-import-eslint.ts',
    'nuxt-api-party',
    '@nuxtjs/google-fonts'
  ],

  imports: {
    dirs: ['composables', 'composables/**']
  },
  nitro: {
    compressPublicAssets: true
  },

  plugins: [{ src: '~/plugins/vue-select.js' }],

  css: ['~/assets/scss/main.scss', 'vue-select/dist/vue-select.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: ['advanced']
    }
  },

  pinia: {
    autoImports: ['defineStore']
  },

  googleFonts: {
    families: {
      'Open+Sans': [300, 400, 500, 600, 700, 900]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true
  },

  apiParty: {
    endpoints: {
      dataApi: {
        url: '',
        // Global headers sent with each request
        headers: {
          accept: 'application/json'
        }
      }
    }
  }
})
