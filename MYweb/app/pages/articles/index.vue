<script setup lang="ts">
import { ref, computed } from 'vue'
import articlesDataRaw from '../../../mock/articles.json'


// 文章型別定義
interface Article {
  id: number
  layout: string
  title: string
  category: string
  description: string
  date: string
  readTime: string
  image?: string
  icon?: string
  iconColor?: string
  tags?: string[]
  isFeatured: boolean
  isTrending: boolean
  link: string
}

const articlesData = articlesDataRaw as Article[]

// 響應式狀態
const searchQuery = ref('')
const selectedCategory = ref('All')

// 分類選項
const categories = ['All', 'React', 'Design Systems', 'Architecture', 'Career']

// 過濾文章
const filteredArticles = computed(() => {
  let filtered = articlesData

  // 根據分類篩選
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter((article: Article) => 
      article.tags?.includes(selectedCategory.value) || 
      article.category === selectedCategory.value
    )
  }

  // 根據搜尋關鍵字篩選
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((article: Article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.tags?.some((tag: string) => tag.toLowerCase().includes(query))
    )
  }

  return filtered
})

// 切換分類
const selectCategory = (category: string) => {
  selectedCategory.value = category
}

// 取得圖示顏色類別
const getIconColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300',
  }
  return colorMap[color] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-300'
}

</script>

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
        <input 
          v-model="searchQuery"
          class="block w-full pl-12 pr-4 py-3.5 rounded-2xl border border-transparent bg-white/50 dark:bg-black/20 backdrop-blur-md focus:bg-white/80 dark:focus:bg-black/40 focus:border-primary/50 focus:ring-0 text-[#181811] dark:text-white placeholder-[#8c8b5f] dark:placeholder-gray-500 transition-all duration-300 shadow-sm outline-none" 
          placeholder="Search for keywords..." 
          type="text"
        />
      </div>
      <!-- Chips -->
      <div class="flex flex-wrap gap-2">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectCategory(category)"
          :class="[
            'px-5 py-2.5 rounded-full text-sm font-medium transition-all',
            selectedCategory === category 
              ? 'bg-[#181811] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
              : 'glass-panel bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 text-[#181811] dark:text-gray-200 hover:bg-white/60 dark:hover:bg-white/10 hover:border-primary/30'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>


    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Dynamic Article Cards -->
      <template v-for="article in filteredArticles" :key="article.id">
        
        <!-- Featured Layout (Card 1) -->
        <NuxtLink 
          v-if="article.layout === 'featured'" 
          :to="article.link"
          class="col-span-1 md:col-span-2 group cursor-pointer relative overflow-hidden rounded-2xl glass-panel bg-glass-light dark:bg-glass-dark border border-glass-border-light dark:border-glass-border-dark flex flex-col md:flex-row h-full min-h-[320px] hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300"
        >
          <div 
            class="w-full md:w-1/2 h-64 md:h-full bg-cover bg-center" 
            :style="`background-image: url('${article.image}');`"
          >
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
          <div class="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <span class="px-3 py-1 rounded-full bg-primary/20 text-yellow-800 dark:text-yellow-200 text-xs font-bold uppercase tracking-wider">Featured</span>
                <span class="text-sm text-[#8c8b5f] dark:text-gray-400">{{ article.date }}</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-[#181811] dark:text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#181811] group-hover:to-[#555] dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all">
                {{ article.title }}
              </h2>
              <p class="text-[#8c8b5f] dark:text-gray-300 line-clamp-3">
                {{ article.description }}
              </p>
            </div>
            <div class="pt-6 flex items-center gap-2 text-sm font-semibold text-[#181811] dark:text-white group-hover:translate-x-2 transition-transform duration-300">
              Read Article
              <span class="material-symbols-outlined text-lg transition-transform duration-300 group-hover:-rotate-45">arrow_forward</span>
            </div>
          </div>
        </NuxtLink>

        <!-- Image Top Layout (Card 3) -->
        <NuxtLink 
          v-else-if="article.layout === 'image-top'" 
          :to="article.link"
          class="col-span-1 group cursor-pointer relative rounded-2xl glass-panel bg-glass-light dark:bg-glass-dark border border-glass-border-light dark:border-glass-border-dark flex flex-col h-full min-h-[320px] overflow-hidden hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300"
        >
          <div 
            class="h-40 w-full bg-cover bg-center" 
            :style="`background-image: url('${article.image}');`"
          ></div>
          <div class="p-6 flex flex-col justify-between flex-1">
            <div>
              <div class="flex gap-2 mb-3">
                <span class="text-xs font-medium text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-md">{{ article.category }}</span>
              </div>
              <h2 class="text-xl font-bold text-[#181811] dark:text-white leading-snug mb-2">
                {{ article.title }}
              </h2>
              <p class="text-sm text-[#8c8b5f] dark:text-gray-400 line-clamp-2">
                {{ article.description }}
              </p>
            </div>
            <div class="pt-4 text-xs text-[#8c8b5f] dark:text-gray-500">{{ article.date }} • {{ article.readTime }}</div>
          </div>
        </NuxtLink>

        <!-- Wide Layout (Card 5) -->
        <NuxtLink 
          v-else-if="article.layout === 'wide'" 
          :to="article.link"
          class="col-span-1 md:col-span-2 lg:col-span-2 group cursor-pointer relative rounded-2xl glass-panel bg-[#181811] dark:bg-black/80 border border-glass-border-light dark:border-glass-border-dark p-8 flex flex-col md:flex-row gap-8 items-center h-full hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300"
        >
          <div class="flex flex-col gap-4 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="text-xs font-bold text-gray-300 uppercase tracking-widest">Trending</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-white leading-tight">
              {{ article.title }}
            </h2>
            <p class="text-gray-400">
              {{ article.description }}
            </p>
            <div class="flex gap-2 mt-2">
              <span 
                v-for="tag in article.tags" 
                :key="tag" 
                class="px-2 py-1 rounded bg-white/10 text-xs text-gray-300"
              >{{ tag }}</span>
            </div>
          </div>
          <!-- Decorative abstract shape -->
          <div class="w-full md:w-48 h-32 md:h-32 shrink-0 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative">
            <div class="absolute w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
            <span class="material-symbols-outlined text-4xl text-white/20 relative z-10">{{ article.icon || 'hub' }}</span>
          </div>
        </NuxtLink>

        <!-- Regular Layout (Cards 2, 4, 6) -->
        <NuxtLink 
          v-else 
          :to="article.link"
          class="col-span-1 group cursor-pointer relative rounded-2xl glass-panel bg-glass-light dark:bg-glass-dark border border-glass-border-light dark:border-glass-border-dark p-6 flex flex-col justify-between h-full min-h-[320px] hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300"
        >
          <div class="flex flex-col gap-4">
            <div 
              :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-2', getIconColorClass(article.iconColor || 'gray')]"
            >
              <span class="material-symbols-outlined">{{ article.icon || 'article' }}</span>
            </div>
            <h2 class="text-xl font-bold text-[#181811] dark:text-white leading-snug">
              {{ article.title }}
            </h2>
            <p class="text-sm text-[#8c8b5f] dark:text-gray-400">
              {{ article.description }}
            </p>
          </div>
          <div class="flex items-center justify-between mt-6 pt-6 border-t border-black/5 dark:border-white/5">
            <span class="text-xs font-medium text-[#8c8b5f] dark:text-gray-500">{{ article.readTime }}</span>
            <div class="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
              <span class="material-symbols-outlined text-sm transition-transform duration-300 group-hover:rotate-45">arrow_outward</span>
            </div>
          </div>
        </NuxtLink>

      </template>
    </div>


    <!-- Footer -->

  </div>
</template>
