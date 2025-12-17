<template>
  <div class="relative z-10 flex min-h-screen w-full flex-col animate-slide-up pb-10">
    <!-- Header Section -->
    <header class="mb-12 md:mb-16 max-w-3xl">
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-[#181811] dark:text-white leading-tight">
          Thought Stream
        </h1>
        <p class="text-lg md:text-xl text-[#8c8b5f] dark:text-gray-400 font-normal leading-relaxed max-w-xl">
          A curated collection of thoughts on frontend architecture, UI design systems, and the pursuit of digital craftsmanship.
        </p>
      </div>
    </header>

    <!-- Controls Section: Search & Filter -->
    <div class="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
      <!-- Search Bar -->
      <div class="relative w-full md:w-96 group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span class="material-symbols-outlined text-[#8c8b5f] dark:text-gray-400 group-focus-within:text-primary transition-colors">search</span>
        </div>
        <input class="block w-full pl-12 pr-4 py-3.5 rounded-2xl border border-transparent bg-white/50 dark:bg-black/20 backdrop-blur-md focus:bg-white/80 dark:focus:bg-black/40 focus:border-primary/50 focus:ring-0 text-[#181811] dark:text-white placeholder-[#8c8b5f] dark:placeholder-gray-500 transition-all duration-300 shadow-sm outline-none" placeholder="Search for keywords..." type="text"/>
      </div>
      <!-- Chips -->
      <div class="flex flex-wrap gap-2">
        <button class="px-5 py-2.5 rounded-full bg-[#181811] text-white text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
          All
        </button>
        <button class="px-5 py-2.5 rounded-full glass-panel bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 text-[#181811] dark:text-gray-200 text-sm font-medium hover:bg-white/60 dark:hover:bg-white/10 hover:border-primary/30 transition-all">
          React
        </button>
        <button class="px-5 py-2.5 rounded-full glass-panel bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 text-[#181811] dark:text-gray-200 text-sm font-medium hover:bg-white/60 dark:hover:bg-white/10 hover:border-primary/30 transition-all">
          Design Systems
        </button>
        <button class="px-5 py-2.5 rounded-full glass-panel bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 text-[#181811] dark:text-gray-200 text-sm font-medium hover:bg-white/60 dark:hover:bg-white/10 hover:border-primary/30 transition-all">
          Architecture
        </button>
        <button class="px-5 py-2.5 rounded-full glass-panel bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 text-[#181811] dark:text-gray-200 text-sm font-medium hover:bg-white/60 dark:hover:bg-white/10 hover:border-primary/30 transition-all">
          Career
        </button>
      </div>
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <!-- Card 1: Featured / Large -->
      <article class="col-span-1 md:col-span-2 group cursor-pointer relative overflow-hidden rounded-2xl glass-panel bg-glass-light dark:bg-glass-dark border border-glass-border-light dark:border-glass-border-dark flex flex-col md:flex-row h-full min-h-[320px] hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300">
        <div class="w-full md:w-1/2 h-64 md:h-full bg-cover bg-center" data-alt="Abstract fluid liquid gradient in dark and light tones" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoLB0jiWD_ROZQBqw-I8Z63STb_YfTy9xS04qJAc_PbWS5qzNCvfYr9DahRgiRpF-so9nhK3ZA13kU72B_0X-1RR01q_9WqDqrlqFbmip_2it6qhfaoebYnQXjgTufFxgUiFadZ0M5jBiy_1j9_gHfnkCeYRIO-UXKdkEn-BCbTN3GPQ5ELSr8_oS04Zc21qi2h3AQ3aGimByJZy9ZnYy_-IdVWe4D-A4nB-1lIzNF_0Muma7oGKN9xjyQd5W45umjGgfHwSp1MKMF');">
          <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
        <div class="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-full bg-primary/20 text-yellow-800 dark:text-yellow-200 text-xs font-bold uppercase tracking-wider">Featured</span>
              <span class="text-sm text-[#8c8b5f] dark:text-gray-400">Nov 24, 2023</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-[#181811] dark:text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#181811] group-hover:to-[#555] dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all">
              Building a Design System with Tailwind CSS
            </h2>
            <p class="text-[#8c8b5f] dark:text-gray-300 line-clamp-3">
              A deep dive into structuring your token configuration, component abstraction, and maintaining consistency at scale without losing velocity.
            </p>
          </div>
          <div class="pt-6 flex items-center gap-2 text-sm font-semibold text-[#181811] dark:text-white group-hover:translate-x-2 transition-transform duration-300">
            Read Article
            <span class="material-symbols-outlined text-lg transition-transform duration-300 group-hover:-rotate-45">arrow_forward</span>
          </div>
        </div>
      </article>

      <!-- Card 2: Regular -->
      <article class="col-span-1 group cursor-pointer relative rounded-2xl glass-panel bg-glass-light dark:bg-glass-dark border border-glass-border-light dark:border-glass-border-dark p-6 flex flex-col justify-between h-full min-h-[320px] hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300">
        <div class="flex flex-col gap-4">
          <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-300 mb-2">
            <span class="material-symbols-outlined">api</span>
          </div>
          <h2 class="text-xl font-bold text-[#181811] dark:text-white leading-snug">
            Understanding React Server Components
          </h2>
          <p class="text-sm text-[#8c8b5f] dark:text-gray-400">
            Breaking down the paradigm shift in React 18. How to mix server and client components effectively.
          </p>
        </div>
        <div class="flex items-center justify-between mt-6 pt-6 border-t border-black/5 dark:border-white/5">
          <span class="text-xs font-medium text-[#8c8b5f] dark:text-gray-500">5 min read</span>
          <div class="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
            <span class="material-symbols-outlined text-sm transition-transform duration-300 group-hover:rotate-45">arrow_outward</span>
          </div>
        </div>
      </article>

      <!-- Card 3: Regular with Image Top -->
      <article class="col-span-1 group cursor-pointer relative rounded-2xl glass-panel bg-glass-light dark:bg-glass-dark border border-glass-border-light dark:border-glass-border-dark flex flex-col h-full min-h-[320px] overflow-hidden hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300">
        <div class="h-40 w-full bg-cover bg-center" data-alt="Retro computer screen with code and glitch effect" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbeqo7jufHmPik3-sm2r4XUwzqySR6hs91fsIsD-qfZTReN-kzjnR5YaH8nChqZclBv3ME46z4rUgxp1GF6eyefB1klqkpUS45b3_NVCrDI3YO_Pcs7EqaoAgsQBKrDC1qFm_4X4TageBL3Z7n5mYvzPrzVQJBrwsfliUcRYmeohMWd_PCXkCztD4D2ZMBiq6DAd0rd4z-poi2Xm0soK0h_u2QlErpfFiF6-VaEDHg5NfXUZF3VBiPyIbpIMC20hVpdSBRTc5A_ReF');"></div>
        <div class="p-6 flex flex-col justify-between flex-1">
          <div>
            <div class="flex gap-2 mb-3">
              <span class="text-xs font-medium text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-md">UX Design</span>
            </div>
            <h2 class="text-xl font-bold text-[#181811] dark:text-white leading-snug mb-2">
              The Art of Micro-interactions
            </h2>
            <p class="text-sm text-[#8c8b5f] dark:text-gray-400 line-clamp-2">
              Why the smallest details often make the biggest impact on user retention and delight.
            </p>
          </div>
          <div class="pt-4 text-xs text-[#8c8b5f] dark:text-gray-500">Sep 10, 2023 • 7 min read</div>
        </div>
      </article>

      <!-- Card 4: Regular -->
      <article class="col-span-1 group cursor-pointer relative rounded-2xl glass-panel bg-glass-light dark:bg-glass-dark border border-glass-border-light dark:border-glass-border-dark p-6 flex flex-col justify-between h-full min-h-[320px] hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300">
        <div class="flex flex-col gap-4">
          <div class="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-300 mb-2">
            <span class="material-symbols-outlined">speed</span>
          </div>
          <h2 class="text-xl font-bold text-[#181811] dark:text-white leading-snug">
            Optimizing Web Performance
          </h2>
          <p class="text-sm text-[#8c8b5f] dark:text-gray-400">
            Core Web Vitals, LCP, CLS, and practical tips to shave off milliseconds from your TTI.
          </p>
        </div>
        <div class="flex items-center justify-between mt-6 pt-6 border-t border-black/5 dark:border-white/5">
          <span class="text-xs font-medium text-[#8c8b5f] dark:text-gray-500">8 min read</span>
          <div class="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
            <span class="material-symbols-outlined text-sm">arrow_outward</span>
          </div>
        </div>
      </article>

      <!-- Card 5: Wide/Span 2 -->
      <article class="col-span-1 md:col-span-2 lg:col-span-2 group cursor-pointer relative rounded-2xl glass-panel bg-[#181811] dark:bg-black/80 border border-glass-border-light dark:border-glass-border-dark p-8 flex flex-col md:flex-row gap-8 items-center h-full hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300">
        <div class="flex flex-col gap-4 flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span class="text-xs font-bold text-gray-300 uppercase tracking-widest">Trending</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-white leading-tight">
            State Management Wars: Redux vs. Zustand vs. Context
          </h2>
          <p class="text-gray-400">
            An unbiased comparison of the current state management landscape in 2024. Which tool is right for your next project?
          </p>
          <div class="flex gap-2 mt-2">
            <span class="px-2 py-1 rounded bg-white/10 text-xs text-gray-300">React</span>
            <span class="px-2 py-1 rounded bg-white/10 text-xs text-gray-300">State</span>
          </div>
        </div>
        <!-- Decorative abstract shape -->
        <div class="w-full md:w-48 h-32 md:h-32 shrink-0 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative">
          <div class="absolute w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
          <span class="material-symbols-outlined text-4xl text-white/20 relative z-10">hub</span>
        </div>
      </article>

      <!-- Card 6: Regular -->
      <article class="col-span-1 group cursor-pointer relative rounded-2xl glass-panel bg-glass-light dark:bg-glass-dark border border-glass-border-light dark:border-glass-border-dark p-6 flex flex-col justify-between h-full min-h-[320px] hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300">
        <div class="flex flex-col gap-4">
          <div class="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-300 mb-2">
            <span class="material-symbols-outlined">style</span>
          </div>
          <h2 class="text-xl font-bold text-[#181811] dark:text-white leading-snug">
            Glassmorphism in 2024
          </h2>
          <p class="text-sm text-[#8c8b5f] dark:text-gray-400">
            Is the frosted glass trend here to stay? How to implement it accessibly.
          </p>
        </div>
        <div class="flex items-center justify-between mt-6 pt-6 border-t border-black/5 dark:border-white/5">
          <span class="text-xs font-medium text-[#8c8b5f] dark:text-gray-500">6 min read</span>
          <div class="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
            <span class="material-symbols-outlined text-sm transition-transform duration-300 group-hover:rotate-45">arrow_outward</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Footer -->

  </div>
</template>
