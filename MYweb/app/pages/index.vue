<template>
  <!-- Main Bento Grid Content -->
  <main class="flex-1 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
    
    <!-- Terminal Hero (Spans 2 cols, 2 rows on large screens) -->
    <div class="md:col-span-2 md:row-span-2 glass-panel bg-glass-bg dark:bg-glass-bg-dark rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden transition-transform hover:scale-[1.01] duration-500">
      <div class="absolute top-4 left-4 flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-400"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div class="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div class="mt-8 font-mono text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <div class="mb-2 opacity-60">// Introduction</div>
        <div class="mb-4">
          <span class="text-purple-600 dark:text-purple-400">const</span> <span class="text-blue-600 dark:text-blue-400">name</span> = <span class="text-green-600 dark:text-green-400">'EY chen'</span>;
        </div>
        <div class="mb-4">
          <span class="text-purple-600 dark:text-purple-400">const</span> <span class="text-blue-600 dark:text-blue-400">role</span> = <span class="text-green-600 dark:text-green-400">'Frontend Engineer'</span>;
        </div>
        <div class="mb-6">
          <span class="text-purple-600 dark:text-purple-400">const</span> <span class="text-blue-600 dark:text-blue-400">mission</span> = <span class="text-green-600 dark:text-green-400">'Crafting pixel-perfect, accessible, and performant user interfaces.'</span>;
        </div>
        <div class="flex items-center">
          <span class="text-slate-400 mr-2">&gt;</span>
          <span>Start_Project()</span>
          <span class="cursor-blink animate-pulse"></span>
        </div>
      </div>
      <div class="mt-8">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-[#181811] dark:text-white">
          Hello, I'm <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400">EY chen.</span>
        </h1>
        <p class="mt-2 text-slate-500 dark:text-slate-400 font-medium">Building the web, one component at a time.</p>
      </div>
    </div>

    <!-- Photo Widget (Vertical Card) -->
    <div class="md:col-span-1 md:row-span-2 relative glass-panel bg-white/40 dark:bg-black/40 rounded-3xl p-3 flex flex-col items-center justify-center group overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90" data-alt="Monochrome artistic portrait of a frontend engineer looking at the horizon" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCErdJzu-tHBAX1rRd0o45p40ARd7ApZaUAzPYZPf5DhWw5e5X_-r0TNIohCrftdPJPXXpZX5zKCbWAtFRQmOCNMbeVsgGf5tLzahObWuDWsoLqMrNQRqP95xjjDTx8eCncXWAF3cevsxpY5cCqNOKDp7W6Tr5BUCDQobbLKvhcM7Dfyv_DQwy-vvHhsudlQrL3IZM6OWGZQjGI9bTfAf9mvgcHyMUG8FEX4yAgad_GJX5Es3IDVaFTHcKbId2NTTS423VFzXEe2rhG');">
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <!-- Glass Overlay Info -->
      <div class="absolute bottom-4 left-4 right-4 glass-panel bg-white/10 dark:bg-black/30 backdrop-blur-xl rounded-2xl p-4 border-t border-white/20">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-white text-sm font-bold">Taiwan, Taichung</p>
            <p class="text-white/70 text-xs">Available for hire</p>
          </div>
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
            <span class="material-symbols-outlined text-lg font-bold">arrow_outward</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats / Socials (Small Cards) -->
    <div class="grid grid-cols-2 gap-4 md:col-span-1 md:row-span-1 h-full">
      <a class="glass-panel bg-white/60 dark:bg-[#2a2915] rounded-3xl p-4 flex flex-col items-center justify-center hover:bg-white/80 dark:hover:bg-[#33321a] transition-colors group" href="https://github.com/tsa206531">
        <div class="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black mb-2 group-hover:scale-110 transition-transform">
          <!-- Simulated GitHub Icon -->
          <span class="material-symbols-outlined">code</span>
        </div>
        <span class="font-bold text-sm">GitHub</span>
      </a>
      <a class="glass-panel bg-white/60 dark:bg-[#2a2915] rounded-3xl p-4 flex flex-col items-center justify-center hover:bg-white/80 dark:hover:bg-[#33321a] transition-colors group" href="https://www.linkedin.com/feed/">
        <div class="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined">work</span>
        </div>
        <span class="font-bold text-sm">LinkedIn</span>
      </a>
      <a class="glass-panel bg-white/60 dark:bg-[#2a2915] rounded-3xl p-4 flex flex-col items-center justify-center hover:bg-white/80 dark:hover:bg-[#33321a] transition-colors group col-span-2" href="#">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-3xl text-primary">mail</span>
          <div class="flex flex-col">
            <span class="text-xs text-slate-500 dark:text-slate-400">Get in touch</span>
            <span class="font-bold text-sm">tsa206531@gmail.com</span>
          </div>
        </div>
      </a>
    </div>

<!-- Widget -->
    <div 
      class="md:col-span-1 lg:col-span-2 xl:col-span-1 glass-panel bg-white/50 dark:bg-[#1a1a1a] rounded-3xl p-6 flex flex-col justify-center items-center group hover:bg-white/80 dark:hover:bg-[#252525] transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[180px]"
      @click="handleThoughtClick"
    >
      <!-- 狀態 1: Idle (Focus mode ON/OFF 樣式) -->
      <div v-if="thoughtState === 'idle'" class="flex flex-col items-center gap-3 w-full">
        <div class="flex items-center gap-3">
          <div class="w-11 h-6 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-full relative transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-slate-300/30 dark:border-slate-500/30">
            <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-gradient-to-b from-white to-slate-50 dark:from-slate-200 dark:to-slate-300 rounded-full transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
          </div>
          <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Focus mode</span>
        </div>
        
        <!-- Hover 提示 -->
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4">
          <p class="text-xs text-slate-400 dark:text-slate-500 font-mono">click for another thought</p>
        </div>
      </div>

      <!-- 狀態 2: Loading (initializing...) -->
      <div v-if="thoughtState === 'loading'" class="flex flex-col items-center gap-3">
        <div class="w-2 h-2 bg-primary rounded-full animate-dot-pulse"></div>
        <span class="text-sm font-mono text-slate-600 dark:text-slate-400">initializing...</span>
      </div>

      <!-- 狀態 3: Showing Thought -->
      <div v-if="thoughtState === 'showing'" class="flex flex-col items-center gap-2 text-center px-4">
        <div 
          v-for="(line, index) in currentThought.lines" 
          :key="index"
          class="animate-thought-enter text-base md:text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ line }}
        </div>
        
        <!-- Hover 提示 -->
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4">
          <p class="text-xs text-slate-400 dark:text-slate-500 font-mono">click for another thought</p>
        </div>
      </div>
    </div>
<!-- WidgetEND -->

    <!-- Tech Stack Ticker -->
    <!-- Tech Stack Ticker (Swiper) -->
    <div class="md:col-span-1 lg:col-span-2 glass-panel bg-white/30 dark:bg-white/5 rounded-3xl p-6 flex flex-col justify-center overflow-hidden">
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 ml-2">Tech Stack</h3>
      
      <ClientOnly>
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="4"
          :space-between="20"

          :breakpoints="{
            640: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 40 }
          }"
          :loop="true"
          :speed="3000"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
          }"
          class="w-full mask-linear-fade"
          :wrapper-class="'transition-timing-linear'"
        >
          <SwiperSlide v-for="tech in techStack" :key="tech.name">
            <div class="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 cursor-default group">
              <div class="w-12 h-12 bg-white/40 dark:bg-black/20 rounded-xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-110">
                <img :src="tech.icon" :alt="tech.name" class="w-full h-full object-contain" />
              </div>
              <span class="text-[10px] font-bold">{{ tech.name }}</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>

    <!-- Project Card 1 -->
    <div class="md:col-span-1 glass-panel bg-white/50 dark:bg-[#1a1a1a] rounded-3xl p-4 flex flex-col gap-3 group hover:bg-white/80 dark:hover:bg-[#252525] transition-all duration-300">
      <div class="w-full aspect-video bg-cover bg-center rounded-2xl relative overflow-hidden" data-alt="Abstract minimalist dashboard interface with charts and sidebar" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhprifmyuaE2pn4Cjze3x0rYA8B98078IO7gtImycQ3nhpsFAJj5dEeEfOhNz0ZQpL0fskjikxdhV82KBZBKwG365Lj8waIua1pKbngkGs4NazaZPCmgAn2M7XbLwiA6Au7gVmQivg_Ae0yvrJYUh94GwsKVRVrU0zg35XSxp1E-3MblZeZNHuRumv5eGpZop4EDoihao05M6rN2yKY3bgQ59u_zeCmbijKBPJSPGznoaYdyKzrtEnXLj2akRHjx22AbEIoPkEBhxn');">
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>
      <div class="px-2 pb-2">
        <div class="flex justify-between items-start mb-1">
          <h3 class="text-lg font-bold text-[#181811] dark:text-white group-hover:text-[#787820] dark:group-hover:text-primary transition-colors">SaaS Dashboard</h3>
          <span class="material-symbols-outlined text-slate-400 text-sm -rotate-45 group-hover:rotate-0 transition-transform">arrow_forward</span>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">A comprehensive analytics dashboard with real-time data visualization using D3.js.</p>
        <div class="flex gap-2 mt-3">
          <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300">React</span>
          <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300">D3</span>
        </div>
      </div>
    </div>

    <!-- Project Card 2 -->
    <div class="md:col-span-1 glass-panel bg-white/50 dark:bg-[#1a1a1a] rounded-3xl p-4 flex flex-col gap-3 group hover:bg-white/80 dark:hover:bg-[#252525] transition-all duration-300">
      <div class="w-full aspect-video bg-cover bg-center rounded-2xl relative overflow-hidden" data-alt="Modern clean e-commerce product page layout" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqxcz7CdhVUvmS0k1u5EvuytCJsYl_gNqEHkIhCBwT5b_93-Oml1coIN6jPGn02WNc_AIjPAwljyOXk5fDNphePL9NmTpPyIx0tvVPtSulLUDdqHGmH66xeO4Xgwge9az6k3OXKeOegEldqNUmYiE96sRuEMU-PL0e49u7QVzDFSkjGmD3GvOJ0UKktvyvUCSuclrrtMyjpnLuVn_wt-82GHrSAWJfw9Zk1fO5-oTNHASG1Dhc1dfv1u9_PAve8vrDanFl3QV0rMNM');">
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>
      <div class="px-2 pb-2">
        <div class="flex justify-between items-start mb-1">
          <h3 class="text-lg font-bold text-[#181811] dark:text-white group-hover:text-[#787820] dark:group-hover:text-primary transition-colors">E-commerce Shop</h3>
          <span class="material-symbols-outlined text-slate-400 text-sm -rotate-45 group-hover:rotate-0 transition-transform">arrow_forward</span>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">Redesigning the shopping experience with focus on micro-interactions and speed.</p>
        <div class="flex gap-2 mt-3">
          <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300">Next.js</span>
          <span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300">Stripe</span>
        </div>
      </div>
    </div>

    <!-- CTA Card -->
    <div class="md:col-span-2 flex flex-col md:flex-row gap-6 glass-panel bg-white/40 dark:bg-[#1e1e1e]/40 rounded-3xl p-8 items-center justify-between text-center md:text-left relative overflow-hidden">
      <div class="relative z-10 max-w-lg">
        <h2 class="text-2xl md:text-3xl font-bold mb-2">已經有專案構想了嗎？</h2>
        <p class="text-slate-600 dark:text-slate-400">目前可自由接案，歡迎洽談新的合作機會。</p>
      </div> 
      <button class="relative z-10 bg-[#38380e] hover:bg-[#787820] text-white dark:bg-primary dark:text-black dark:hover:bg-[#e6e205] font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,245,6,0.4)] flex items-center gap-2 whitespace-nowrap">
        Let's Chat
        <span class="material-symbols-outlined">chat_bubble</span>
      </button>
      <!-- Decoration -->
      <div class="absolute -right-10 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-[60px]"></div>
    </div>

  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import techData from '../../mock/Tech.json'
import thoughtsData from '../../mock/Focus_mode.json'

const techStack = techData
const SwiperAutoplay = Autoplay

// Thought Widget State Management
type ThoughtState = 'idle' | 'loading' | 'showing'

interface Thought {
  id: number
  lines: string[]
}

const thoughtState = ref<ThoughtState>('idle')
const currentThought = ref<Thought>({ id: 0, lines: [] })
let lastThoughtId = 0

// 隨機選擇思考句(避免連續重複)
const getRandomThought = (): Thought => {
  const availableThoughts = thoughtsData.thoughts.filter((t: Thought) => t.id !== lastThoughtId)
  const randomThought = availableThoughts.length > 0 
    ? availableThoughts[Math.floor(Math.random() * availableThoughts.length)]
    : thoughtsData.thoughts[0]
  
  if (randomThought) {
    lastThoughtId = randomThought.id
    return randomThought
  }
  
  // Fallback (should never happen if JSON is valid)
  return { id: 0, lines: ['Something went wrong...'] }
}

// 處理點擊事件
const handleThoughtClick = () => {
  // 進入 loading 狀態
  thoughtState.value = 'loading'
  
  // 0.5 秒後顯示思考句
  setTimeout(() => {
    currentThought.value = getRandomThought()
    thoughtState.value = 'showing'
  }, 500)
}
</script>
