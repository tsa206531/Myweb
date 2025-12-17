<template>
  <!-- Fixed Right Navbar (Desktop Only) -->
  <nav class="hidden md:flex flex-col gap-3 fixed right-8 top-1/2 -translate-y-1/2 h-fit z-50">
    <div class="glass-panel bg-white/70 dark:bg-black/60 backdrop-blur-md rounded-full py-4 px-2 flex flex-col gap-4 shadow-2xl border border-glass-border dark:border-white/10">
      <NuxtLink to="/" class="group relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary/20 transition-colors" active-class="bg-primary/20">
        <span class="material-symbols-outlined text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">home</span>
        <span class="absolute right-full mr-4 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white text-xs font-bold py-1 px-3 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap">
          Home
        </span>
      </NuxtLink>
      <NuxtLink to="/about" class="group relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary/20 transition-colors" active-class="bg-primary/20">
        <span class="material-symbols-outlined text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">person</span>
        <span class="absolute right-full mr-4 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white text-xs font-bold py-1 px-3 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap">
          About
        </span>
      </NuxtLink>
      <NuxtLink to="/portfolio" class="group relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary/20 transition-colors" active-class="bg-primary/20">
        <span class="material-symbols-outlined text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">folder_open</span>
        <span class="absolute right-full mr-4 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white text-xs font-bold py-1 px-3 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap">
          Work
        </span>
      </NuxtLink>
      <NuxtLink to="/articles" class="group relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary/20 transition-colors" active-class="bg-primary/20">
        <span class="material-symbols-outlined text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">article</span>
        <span class="absolute right-full mr-4 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white text-xs font-bold py-1 px-3 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap">
          Articles
        </span>
      </NuxtLink>
      <NuxtLink to="/contact" class="group relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary/20 transition-colors" active-class="bg-primary/20">
        <span class="material-symbols-outlined text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">mail</span>

        <span class="absolute right-full mr-4 bg-white dark:bg-zinc-800 text-slate-900 dark:text-white text-xs font-bold py-1 px-3 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap">
          Contact
        </span>
      </NuxtLink>
      <div class="h-px w-6 bg-slate-200 dark:bg-slate-700 mx-auto my-1"></div>
      <!-- Mode Toggle Simulation -->
      <button @click="toggleDark()" class="group relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
        <span class="material-symbols-outlined text-slate-400 text-xl group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors">dark_mode</span>
      </button>
    </div>
  </nav>

  <!-- Mobile Bottom Nav (Visible only on small screens) -->
  <nav class="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-50 w-[90%] max-w-sm">
    <div class="glass-panel bg-white/80 dark:bg-[#1a1a1a]/90 backdrop-blur-xl rounded-full p-2 flex justify-between items-center shadow-2xl border border-white/20">
      <NuxtLink to="/" class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400" active-class="text-primary bg-slate-100 dark:bg-white/10">
        <span class="material-symbols-outlined">home</span>
      </NuxtLink>
      <NuxtLink to="/about" class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400" active-class="text-primary bg-slate-100 dark:bg-white/10">
        <span class="material-symbols-outlined">person</span>
      </NuxtLink>

      <NuxtLink to="/portfolio" class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400" active-class="text-primary bg-slate-100 dark:bg-white/10">
        <span class="material-symbols-outlined">folder_open</span>
      </NuxtLink>
      <NuxtLink to="/articles" class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400" active-class="text-primary bg-slate-100 dark:bg-white/10">
        <span class="material-symbols-outlined">article</span>
      </NuxtLink>
      <NuxtLink to="/contact" class="flex items-center justify-center w-12 h-12 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400" active-class="text-primary bg-slate-100 dark:bg-white/10">
        <span class="material-symbols-outlined">mail</span>
      </NuxtLink>

      <button @click="toggleDark()" class="group relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <span class="material-symbols-outlined text-slate-400 text-xl group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors">dark_mode</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
