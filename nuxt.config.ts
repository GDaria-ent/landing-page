export default defineNuxtConfig({
  components: [
    {
      global: true,
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: [
    '~/assets/scss/style.scss'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icons'
  ],

});
