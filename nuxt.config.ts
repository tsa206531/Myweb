// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-swiper'],
  css: ['~/assets/css/main.css', 'swiper/css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant-TW' },
      title: 'Home - Full-Stack Engineer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' },
        // 只載入有用到的 icon（新增 icon 時要把名稱加進 icon_names，且需依字母排序，否則會顯示成文字）
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=api,arrow_forward,arrow_outward,article,chat_bubble,chevron_left,chevron_right,close,code,dark_mode,download,folder_open,history,home,hub,language,light_mode,lightbulb,location_on,mail,person,search,speed,style,terminal,work&display=block' }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  }
})
