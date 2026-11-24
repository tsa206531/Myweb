<template>
  <div class="flex flex-col w-full pb-10">
    <!-- Header Section -->
    <header class="mb-16 animate-slide-up" style="animation-delay: 0.1s;">
      <div class="flex flex-col gap-4 max-w-2xl">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-[#181811] dark:text-white">
          Selected Works
        </h1>
        <p class="text-xl text-[#6b6a45] dark:text-gray-400 font-light leading-relaxed max-w-lg">
          精選作品，探索設計與全端工程之間的平衡
        </p>
      </div>
    </header>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        role="button"
        tabindex="0"
        :aria-label="`查看專案：${project.title}`"
        @click="openModal(project, $event)"
        @keydown.enter.prevent="openModal(project, $event)"
        @keydown.space.prevent="openModal(project, $event)"
        :class="[
          'group relative rounded-xl glass-panel shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer animate-slide-up',
          project.cols || 'col-span-1',
          project.rows || 'row-span-1'
        ]"
        :style="`animation-delay: ${0.2 + (index * 0.1)}s;`"
      >
        <!-- Card Content -->
        <!-- Logic for Wide/Tall cards vs Standard -->
        <template v-if="project.layout === 'featured'">
           <img :src="project.images[0]" alt="" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
           <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
           <div class="absolute bottom-0 left-0 p-8 w-full">
             <div class="flex justify-between items-end">
               <div>
                 <span class="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide uppercase bg-primary text-black rounded-full">{{ project.category }}</span>
                 <h3 class="text-3xl font-bold text-white mb-1">{{ project.title }}</h3>
                 <p class="text-gray-200 text-sm">{{ project.description }}</p>
               </div>
               <span aria-hidden="true" class="shrink-0 bg-white/20 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full text-white group-hover:bg-primary group-hover:text-black transition-colors">
                 <span class="material-symbols-outlined text-[24px]">arrow_outward</span>
               </span>
             </div>
           </div>
        </template>
        
        <template v-else-if="project.layout === 'split'">
          <div class="h-full w-full p-8 flex flex-col justify-between relative z-10">
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-bold text-[#181811] dark:text-white">{{ project.title }}</h3>
              <p class="text-[#6b6a45] dark:text-gray-300 max-w-sm">{{ project.description }}</p>
              <div class="flex gap-2 mt-2">
                <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-medium">{{ tag }}</span>
              </div>
            </div>
            <img :src="project.images[0]" alt="" loading="lazy" decoding="async" class="absolute right-0 top-0 bottom-0 w-1/2 h-full object-cover object-left mask-image-linear-gradient" />
          </div>
        </template>

        <template v-else>
          <!-- Standard Card -->
          <img :src="project.images[0]" alt="" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

          <!-- Playground specific overlay -->
          <div v-if="project.title === 'Playground'" class="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span class="text-white font-medium border border-white/50 px-4 py-2 rounded-full">View Concept</span>
          </div>
          <div v-else class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>

          <div class="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div class="glass-panel bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 class="text-lg font-bold text-[#181811] dark:text-white">{{ project.title }}</h3>
                <p class="text-[#6b6a45] dark:text-gray-400 text-xs">{{ project.category }}</p>
              </div>
            </div>
          </div>
        </template>

      </div>
    </div>

    <!-- Modal Overlay -->

    <!--
         "featured"：大圖樣式 (Nova Dashboard)
         "split"：左右分割樣式 (Design System "Aether")
         "standard"：標準卡片樣式  
    -->
         
    <div v-if="showModal && selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in" @click.self="closeModal">
      <!-- Blurred Backdrop -->
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeModal"></div>

      <!-- Modal Content -->
      <div role="dialog" aria-modal="true" aria-labelledby="project-modal-title" class="relative w-full max-w-5xl max-h-[90vh] glass-panel bg-[#f8f8f5]/95 dark:bg-[#1a1a12]/95 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">

        <button ref="closeButton" type="button" aria-label="關閉" @click="closeModal" class="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/5 w-10 h-10 hover:bg-primary hover:text-black transition-colors dark:text-white dark:bg-white/10 dark:hover:bg-primary dark:hover:text-black">
          <span aria-hidden="true" class="material-symbols-outlined">close</span>
        </button>
        <div class="flex flex-col md:flex-row h-full overflow-hidden">
          <!-- Left: Details -->
          <div class="flex-1 p-8 md:p-10 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#6b6a45] bg-[#f5f5f0] dark:bg-white/10 dark:text-gray-300 rounded-full">{{ selectedProject.category }}</span>
                <span class="text-[#6b6a45] dark:text-gray-500 text-sm">{{ selectedProject.year }}</span>
              </div>
              <h2 id="project-modal-title" class="text-3xl md:text-4xl font-bold text-[#181811] dark:text-white mb-2 leading-tight">{{ selectedProject.title }}</h2>
            </div>
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <div v-for="tag in selectedProject.tags" :key="tag" class="flex items-center justify-center px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10"><span class="text-sm font-medium">{{ tag }}</span></div>
            </div>
            <div class="prose dark:prose-invert text-[#181811]/80 dark:text-white/80 leading-relaxed text-base md:text-lg">
              <p>{{ selectedProject.details }}</p>
            </div>
              <div class="mt-auto pt-6 flex flex-wrap gap-4">
                <a v-if="selectedProject.links?.demo" :href="selectedProject.links.demo" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center gap-2 bg-primary text-[#181811] px-8 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(249,245,6,0.6)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-fit">
                  <span>Visit Project</span>
                  <span class="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
                </a>
                <a v-if="selectedProject.links?.github" :href="selectedProject.links.github" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center gap-2 bg-black/5 dark:bg-white/10 text-[#181811] dark:text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 w-full sm:w-fit">
                  <span>GitHub</span>
                  <span class="material-symbols-outlined text-[20px] transition-transform duration-500 group-hover:rotate-[360deg]">code</span>
                </a>
              </div>
          </div>

          <!-- Right: Visuals / Carousel -->
          <div class="flex-1 bg-[#f0f0eb] dark:bg-black/20 p-8 flex flex-col justify-center relative overflow-hidden group/carousel">
            <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img :src="currentImage" :alt="`${selectedProject.title} 截圖 ${currentImageIndex + 1}`" class="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out" :style="{ opacity: isAnimating ? 0.8 : 1 }" />

              <!-- Navigation Controls（手機上常駐顯示，桌機 hover / 鍵盤聚焦時顯示） -->
              <div v-if="selectedProject.images.length > 1" class="absolute inset-0 flex items-center justify-between p-4 pointer-events-none md:opacity-0 md:group-hover/carousel:opacity-100 md:focus-within:opacity-100 transition-opacity duration-300">
                <button type="button" aria-label="上一張" @click.stop="prevImage" class="pointer-events-auto w-10 h-10 flex items-center justify-center bg-black/20 backdrop-blur-md text-white rounded-full hover:bg-black/40"><span aria-hidden="true" class="material-symbols-outlined leading-none">chevron_left</span></button>
                <button type="button" aria-label="下一張" @click.stop="nextImage" class="pointer-events-auto w-10 h-10 flex items-center justify-center bg-black/20 backdrop-blur-md text-white rounded-full hover:bg-black/40"><span aria-hidden="true" class="material-symbols-outlined leading-none">chevron_right</span></button>
              </div>
            </div>
            <!-- Indicators -->
            <div class="flex justify-center gap-3 mt-6">
              <button
                v-for="(img, idx) in selectedProject.images"
                :key="idx"
                type="button"
                :aria-label="`第 ${idx + 1} 張`"
                :aria-current="idx === currentImageIndex ? 'true' : undefined"
                @click="currentImageIndex = idx"
                :class="['h-1.5 rounded-full transition-all duration-300', idx === currentImageIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 dark:bg-gray-600']"
              ></button>
            </div>
            <p class="text-center text-xs text-gray-500 mt-4 font-mono">{{ pad(currentImageIndex + 1) }} / {{ pad(selectedProject.images.length) }} — Project Screenshot</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onBeforeUnmount } from 'vue'
import { onKeyStroke, useScrollLock } from '@vueuse/core'

interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  images: string[]
  year: string
  details: string
  cols?: string // for grid layout span
  rows?: string // for grid layout span
  id?: number

  layout?: string
  links?: {
    demo?: string
    github?: string
  }
}

const showModal = ref(false)
const selectedProject = ref<Project | null>(null)
const currentImageIndex = ref(0)
const isAnimating = ref(false)

import projectsData from '../../../mock/work.json'

const projectsDataTyped: Project[] = projectsData

const projects = computed(() => {
  return [...projectsDataTyped].sort((a, b) => (a.id || 0) - (b.id || 0))
})


const currentImage = computed(() => {
  if (!selectedProject.value || !selectedProject.value.images) return ''
  return selectedProject.value.images[currentImageIndex.value]
})

const pad = (n: number) => String(n).padStart(2, '0')

const closeButton = ref<HTMLButtonElement | null>(null)
let lastTrigger: HTMLElement | null = null

// 開啟 Modal 時鎖住背景捲動
const isLocked = useScrollLock(import.meta.client ? document.body : null)

const openModal = async (project: Project, event?: Event) => {
  lastTrigger = (event?.currentTarget as HTMLElement) ?? null
  selectedProject.value = project
  currentImageIndex.value = 0
  showModal.value = true
  isLocked.value = true
  await nextTick()
  closeButton.value?.focus()
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
  isLocked.value = false
  // 關閉後把焦點還給原本的卡片
  lastTrigger?.focus()
  lastTrigger = null
}

// 鍵盤：ESC 關閉、左右鍵切換圖片
onKeyStroke('Escape', () => { if (showModal.value) closeModal() })
onKeyStroke('ArrowLeft', () => { if (showModal.value) prevImage() })
onKeyStroke('ArrowRight', () => { if (showModal.value) nextImage() })

onBeforeUnmount(() => { isLocked.value = false })

const nextImage = () => {
  if (!selectedProject.value) return
  isAnimating.value = true
  currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.images.length
  setTimeout(() => isAnimating.value = false, 300)
}

const prevImage = () => {
  if (!selectedProject.value) return
  isAnimating.value = true
  currentImageIndex.value = (currentImageIndex.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length
  setTimeout(() => isAnimating.value = false, 300)
}
</script>
