export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Shoobhit Resume',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Shoobhit Resume' },
      ],
    },
  },
  ssr: false,
  target: 'static',
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.NUXT_APP_URL || 'https://your-netlify-site-url.netlify.app',
    },
  },
  build: {
    transpile: ['@nuxtjs/tailwindcss'],
  },
})
