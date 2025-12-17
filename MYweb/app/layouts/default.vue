<template>
  <div class="relative min-h-screen font-display text-[#181811] dark:text-[#e0e0e0] antialiased overflow-x-hidden selection:bg-primary selection:text-black">
    <!-- Decorative Blobs -->
    <div class="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
    <div class="fixed bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-blue-300/10 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

    <div class="relative z-10 flex min-h-screen p-4 md:p-8 lg:p-12 md:pr-32 lg:pr-40 gap-6 max-w-[1600px] mx-auto">
      <!-- Main Content -->
      <div class="flex flex-col w-full pb-24 md:pb-0">
        <NuxtPage />
        <Footer />
      </div>

      <!-- Navbar (Right-aligned desktop, Bottom mobile) -->
      <Navbar />
    </div>
  </div>
</template>
