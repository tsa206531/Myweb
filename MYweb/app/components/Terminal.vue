<template>
  <div class="w-full h-full flex flex-col font-mono text-sm bg-[#1a1a1a] dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
    <!-- Window Header -->
    <div class="px-4 py-3 flex gap-2 border-b border-white/5 bg-white/5">
      <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
      <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
      <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      <div class="ml-auto text-xs text-white/30 hidden sm:block">guest@stitch.dev: ~</div>
    </div>
    
    <!-- Terminal Body -->
    <div ref="terminalBody" class="flex-1 p-6 overflow-y-auto custom-scrollbar text-gray-300">
      <div v-for="(line, index) in lines" :key="index" class="mb-2">
        <div v-if="line.type === 'command'" class="flex gap-2">
          <span class="text-primary font-bold">➜</span>
          <span class="text-cyan-400 font-bold">~</span>
          <span class="text-white">{{ line.content }}</span>
        </div>
        <div v-if="line.type === 'output'" class="pl-5 leading-relaxed" v-html="line.content"></div>
      </div>
      <!-- Typing Cursor -->
      <div v-if="isTyping" class="flex gap-2">
        <span class="text-primary font-bold">➜</span>
        <span class="text-cyan-400 font-bold">~</span>
        <span class="text-white">{{ currentInput }}<span class="animate-pulse bg-white/50 w-2 h-4 inline-block align-middle ml-1"></span></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTypewriter } from '@vueuse/core' // Or custom implementation if simple

interface Line {
  type: 'command' | 'output'
  content: string
}

const lines = ref<Line[]>([])
const currentInput = ref('')
const isTyping = ref(false)

const introSequence = [
  { type: 'command', content: 'whoami' },
  { type: 'output', content: '你好！我是 <strong class="text-primary">Stitch</strong>。' },
  { type: 'output', content: '我是一名專注於創造流暢互動體驗的創意開發者。' },
  { type: 'output', content: '致力於連結 <span class="text-primary">設計</span> 與 <span class="text-cyan-400">工程</span>。' },
  { type: 'command', content: 'cat mission.txt' },
  { type: 'output', content: '<span class="italic text-slate-400">"打造不僅實用，更令人愉悅的軟體。"</span>' },
  { type: 'command', content: 'ls -l skills' },
  { type: 'output', content: 'Vue3 · Nuxt3 · TailwindCSS · TypeScript · Figma' },
]

// Simple typewriter simulation
const typeDelay = 50
const lineDelay = 600

const typeLine = async (text: string) => {
  isTyping.value = true
  for (let i = 0; i <= text.length; i++) {
    currentInput.value = text.slice(0, i)
    await new Promise(r => setTimeout(r, Math.random() * 50 + 30))
  }
}

const runSequence = async () => {
  for (const item of introSequence) {
    if (item.type === 'command') {
      await typeLine(item.content)
      await new Promise(r => setTimeout(r, 300))
      isTyping.value = false
      lines.value.push(item as Line)
      currentInput.value = ''
    } else {
      await new Promise(r => setTimeout(r, lineDelay))
      lines.value.push(item as Line)
    }
  }
}

onMounted(() => {
  setTimeout(runSequence, 1000)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
</style>
