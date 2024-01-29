// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  modules: [
    // ...
    '@pinia/nuxt',
  ],

  css: [
    '~/assets/css/reset.css',
    '~/assets/fonts/font.css',
    '~/assets/css/main.css',
  ],

})
