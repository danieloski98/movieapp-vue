// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition
      : {
      name
        : 'layout', mode
        : 'out-in'
    }
  },
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    preload: true,
  }
})