// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: {
    enabled: true
  },

  runtimeConfig: {
    shopify: {
      storefront: process.env.NUXT_SHOPIFY_STOREFRONT,
      accessToken: process.env.NUXT_SHOPIFY_ACCESS_TOKEN,
      adminToken: process.env.NUXT_SHOPIFY_ADMIN_API_TOKEN,
      apiVersion: process.env.NUXT_SHOPIFY_API_VERSION
    },
    klaviyo: {
      publicApiKey: process.env.NUXT_KLAVIYO_PUBLIC_API_KEY,
      privateApiKey: process.env.NUXT_KLAVIYO_PRIVATE_API_KEY,
      apiVersion: process.env.NUXT_KLAVIYO_API_VERSION
    }
  },

  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }]
    }
  },

  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxthub/core',
    '@hypernym/nuxt-gsap',
    '@nuxt/image',
    'nuxt-swiper'
  ],

  gsap: {
    composables: true,
    extraPlugins: {
      motionPath: true,
      scrollTrigger: true
    }
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600]
    }
  },

  tailwindcss: {
    cssPath: '@/assets/styles/app.css'
  },

  components: [
    {
      path: '@/components',
      pathPrefix: false
    }
  ],

  compatibilityDate: '2025-01-13',

  // build: {
  //   transpile: ['gsap']
  // },

  // vite: {
  //   optimizeDeps: {
  //     exclude: ['gsap']
  //   }
  // }

  // plugins: [{ src: '~/plugins/gsap.client.js', mode: 'client' }]
  nitro: {
    experimental: {
      openAPI: true
    }
  }
});