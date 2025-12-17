<template>
  <div class="flex pb-10 items-center justify-center min-h-[80vh] w-full animate-enter-up">
    <!-- Contact Card -->
    <div class="glass-panel w-full max-w-2xl p-8 md:p-12 rounded-3xl flex flex-col items-center text-center gap-8 relative overflow-hidden">
      
      <!-- Decorative background blob -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>

      <div class="flex flex-col gap-4">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-[#181811] dark:text-white">
          Get in Touch
        </h1>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Have a project in mind or just want to explore a potential partnership? I'm always open to discussing new opportunities.
        </p>
      </div>

      <a href="mailto:hello@johndoe.dev" class="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#38380e] hover:bg-[#787820] text-white dark:bg-primary dark:text-black dark:hover:bg-[#e6e205] font-bold text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(249,245,6,0.4)]">
        <span class="material-symbols-outlined">mail</span>
        hello@johndoe.dev
      </a>

      <div class="flex gap-6 mt-4">
        <a href="#" class="p-4 rounded-full glass-panel bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors group">
          <span class="material-symbols-outlined text-2xl text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">code</span>
        </a>
        <a href="#" class="p-4 rounded-full glass-panel bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors group">
          <span class="material-symbols-outlined text-2xl text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">work</span>
        </a>
      </div>
    </div>
  </div>
</template>
