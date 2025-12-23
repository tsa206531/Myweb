<template>
  <div class="relative min-h-[80vh] flex flex-col gap-6 pb-10 animate-enter-up">
    <!-- Header -->
    <header class="flex flex-col gap-2 mb-4 pl-2">
      <h1 class="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
        About <span class="text-slate-400 dark:text-slate-600">Me</span>.
      </h1>
      <p class="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl">
        Crafting digital experiences with a focus on motion, aesthetics, and clean code.
      </p>
    </header>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-min">
      
      <!-- 1. Profile Card (Tall - Left) -->
      <div class="glass-panel hover:shadow-glass-hover transition-all duration-300 rounded-xl p-2 col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2 flex flex-col h-full min-h-[400px]">
        <div class="relative w-full aspect-[4/5] lg:h-3/4 rounded-lg overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <!-- Profile Image -->
          <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Portrait of a young man smiling in a casual setting" style="background-image: url('../Front-view.png');"></div>
          <div class="absolute bottom-4 left-4 z-20">
            <div class="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 text-xs font-medium text-white mb-2 inline-flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Open to work
            </div>
            <h2 class="text-white text-2xl font-bold leading-tight">EY chen</h2>
            <p class="text-white/80 text-sm">Frontend Engineer</p>
          </div>
        </div>
        <div class="p-4 flex flex-col justify-between grow gap-4">
          <div class="flex flex-wrap gap-2">
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
              <span class="material-symbols-outlined text-[16px]">location_on</span>
              Taichung
            </div>
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
              <span class="material-symbols-outlined text-[16px]">language</span>
              EN / TW
            </div>
          </div>
          <a class="w-full py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-center text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2" href="#">
            Download CV
            <span class="material-symbols-outlined text-[18px]">download</span>
          </a>
        </div>
      </div>

      <!-- 2. Terminal Card (Wide - Top Center) -->
      <div class="glass-panel hover:shadow-glass-hover transition-all duration-300 rounded-xl col-span-1 md:col-span-1 lg:col-span-6 overflow-hidden flex flex-col bg-slate-900 dark:bg-black border-slate-800 dark:border-slate-800 min-h-[300px]">
        <!-- Terminal Header -->
        <div class="flex items-center gap-2 px-4 py-3 bg-slate-800/50 dark:bg-white/5 border-b border-white/5">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div class="mx-auto text-xs text-slate-400 font-mono flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">terminal</span>
            zsh — 80x24
          </div>
        </div>
        <!-- Terminal Body -->
        <div class="p-6 font-mono text-sm md:text-base text-slate-300 flex flex-col gap-4 grow">
          <div>
            <p class="text-green-400 mb-1">➜  ~  whoami</p>
            <p class="leading-relaxed text-slate-100">
              你好！我是一名前端開發者，擅長在理性與直覺之間取得平衡，專注打造有<span class="text-primary font-bold">思考感</span>、<span class="text-primary font-bold">以人為核心</span> 
              的互動介面。我遊走於 AI、網頁技術與設計的交會點，將想法轉化為實用且具態度的系統。受哲學影響，也重視清晰與真誠，我希望做出的作品，不只是好用，而是能陪人思考。
            </p>
          </div>
          <div>
            <p class="text-green-400 mb-1">➜  ~  cat mission.txt</p>
            <p class="leading-relaxed text-slate-400 italic">
              "打造不僅功能強大，而且令人愉悅的軟體."
            </p>
          </div>
          <div class="mt-auto">
            <span class="text-green-400">➜  ~</span> <span class="inline-block w-2.5 h-5 bg-primary align-middle animate-pulse"></span>
          </div>
        </div>
      </div>

      <!-- 3. Timeline Card (Tall - Right) -->
      <div class="glass-panel hover:shadow-glass-hover transition-all duration-300 rounded-xl col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-2 p-6 flex flex-col h-full">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-bold">Journey</h3>
          <span class="p-2 rounded-full bg-background-light dark:bg-white/5 text-slate-500 w-9 h-9">
            <span class="material-symbols-outlined text-[20px]">history</span>
          </span>
        </div>
        <div class="relative flex flex-col gap-8 ml-2 h-full">
          <!-- Vertical Line -->
          <div class="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-white/10 rounded-full"></div>
          
          <div class="relative pl-8 group">
            <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full border-[3px] border-white dark:border-slate-800 bg-primary z-10 shadow-[0_0_0_2px_rgba(249,245,6,0.2)]"></div>
            <div class="flex flex-col">
              <span class="text-xs font-semibold text-primary uppercase tracking-wide">Present</span>
              <h4 class="font-bold text-slate-900 dark:text-white mt-1">Freelance Frontend Developer</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400"></p>
            </div>
          </div>
          
          <div class="relative pl-8 group">
            <div class="absolute left-[3px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 z-10 group-hover:bg-primary transition-colors"></div>
            <div class="flex flex-col">
              <span class="text-xs font-medium text-slate-400 uppercase tracking-wide">2025</span>
              <h4 class="font-bold text-slate-800 dark:text-slate-200 mt-1">Learning Nuxt 3</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400"></p>
            </div>
          </div>

                    <div class="relative pl-8 group">
            <div class="absolute left-[3px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 z-10 group-hover:bg-primary transition-colors"></div>
            <div class="flex flex-col">
              <span class="text-xs font-medium text-slate-400 uppercase tracking-wide">2025</span>
              <h4 class="font-bold text-slate-800 dark:text-slate-200 mt-1">University Graduation</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400">College of Business for NCHU</p>
            </div>
          </div>

          <div class="relative pl-8 group">
            <div class="absolute left-[3px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 z-10 group-hover:bg-primary transition-colors"></div>
            <div class="flex flex-col">
              <span class="text-xs font-medium text-slate-400 uppercase tracking-wide">2024</span>
              <h4 class="font-bold text-slate-800 dark:text-slate-200 mt-1">Frontend Development with Vue.js</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400">六角學院</p>
            </div>
          </div>

          <div class="relative pl-8 group">
            <div class="absolute left-[3px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 z-10 group-hover:bg-primary transition-colors"></div>
            <div class="flex flex-col">
              <span class="text-xs font-medium text-slate-400 uppercase tracking-wide">2022 ~ 2023</span>
              <h4 class="font-bold text-slate-800 dark:text-slate-200 mt-1">Learning HTML/CSS/JS</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400">六角學院</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Tech Stack (Center Bottom Left) -->
      <div class="glass-panel hover:shadow-glass-hover transition-all duration-300 rounded-xl col-span-1 md:col-span-1 lg:col-span-3 p-6 flex flex-col gap-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="material-symbols-outlined text-primary">code</span>
          <h3 class="font-bold text-lg">Tech Stack</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">Vue3.js</span>
          <span class="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">TypeScript</span>
          <span class="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">Nuxt3.js</span>
          <span class="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">Tailwind</span>
          <span class="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">bootstrap</span>
          <span class="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">Node.js</span>
          <span class="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">firebase</span>
          <span class="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default">Git</span>
        </div>
      </div>

      <!-- 5. Fun Facts (Center Bottom Right) -->
      <div class="glass-panel hover:shadow-glass-hover transition-all duration-300 rounded-xl col-span-1 md:col-span-1 lg:col-span-3 p-6 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
        <!-- Decorative background blob -->
        <div class="absolute -right-8 -top-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all"></div>
        <div class="flex items-center justify-between z-10">
          <h3 class="font-bold text-lg">Next stage</h3>
          <span class="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">lightbulb</span>
        </div>
        <div class="mt-4 z-10">
          <p class="text-xl font-bold leading-tight text-slate-800 dark:text-white">
            專注學習 <br/>
            <span class="text-slate-400 decoration-primary decoration-2 underline underline-offset-3">Node.js  &  TypeScript</span><br> 逐步邁向全端工程師
          </p>
        </div>
        <div class="mt-4 flex gap-1 z-10">
          <div class="w-2 h-2 rounded-full bg-slate-800 dark:bg-white"></div>
          <div class="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20"></div>
          <div class="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20"></div>
        </div>
      </div>

    </div>
  </div>
</template>
