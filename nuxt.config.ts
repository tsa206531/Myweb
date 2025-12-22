// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-swiper'],
  css: ['~/assets/css/main.css', 'swiper/css'],
  app: {
    head: {
      title: 'Home - Frontend Engineer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  }
})
