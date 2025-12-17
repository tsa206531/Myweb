<template>
  <Transition name="modal-fade">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="$emit('close')"></div>

      <!-- Modal Content -->
      <GlassCard class="relative w-full max-w-4xl max-h-full overflow-y-auto !bg-slate-900/90 !border-slate-700/50 shadow-2xl flex flex-col md:flex-row gap-6 p-0 overflow-hidden">
        
        <!-- Image Carousel (Left/Top) -->
        <div class="w-full md:w-1/2 h-64 md:h-auto bg-slate-800 relative group">
          <img :src="project.image" alt="Project Cover" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:hidden">
            <h2 class="text-xl font-bold text-white">{{ project.title }}</h2>
          </div>
        </div>

        <!-- Info (Right/Bottom) -->
        <div class="p-6 md:p-8 md:w-1/2 flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h2 class="text-2xl font-bold mb-1 hidden md:block">{{ project.title }}</h2>
              <span class="text-sm text-accent-secondary">{{ project.category }}</span>
            </div>
            <button @click="$emit('close')" class="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X class="w-6 h-6" />
            </button>
          </div>

          <p class="text-slate-300 leading-relaxed mb-6 flex-1">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="tag in project.tags" :key="tag" class="text-xs px-2 py-1 rounded border border-slate-600 text-slate-400">
              #{{ tag }}
            </span>
          </div>

          <a :href="project.link" target="_blank" class="w-full py-3 rounded-xl bg-accent-primary text-white font-bold text-center hover:brightness-110 transition-all shadow-lg shadow-accent-primary/20">
            查看專案
          </a>
        </div>
      </GlassCard>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

defineProps<{
  show: boolean
  project: {
    title: string
    category: string
    description: string
    image: string
    tags: string[]
    link: string
  }
}>()

defineEmits(['close'])
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
