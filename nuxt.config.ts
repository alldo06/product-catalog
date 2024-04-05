// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'SUITE',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', href: '/apple-icon.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-icons',
    '@nuxtjs/eslint-module',
    './modules/auto-import-eslint.ts',
    'nuxt-api-party',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-gsap'
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  },

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
      Poppins: [300, 400, 500, 600, 700, 900],
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
      productsApi: {
        url: 'https://api.escuelajs.co/api/v1',
        // Global headers sent with each request
        headers: {
          accept: 'application/json'
        }
      }
    }
  }
})
