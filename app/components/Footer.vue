<template>
  <footer class="mt-auto py-8  border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-[#6b6a45] dark:text-gray-500 ">
    <p>© {{ year }} EY Chen. All rights reserved.</p>
    <div class="flex gap-6 mt-4 md:mt-0">
      <a class="hover:text-[#181811] dark:hover:text-white transition-colors" href="https://medium.com/@tsa206531" target="_blank" rel="noopener noreferrer">Medium</a>
      <a class="hover:text-[#181811] dark:hover:text-white transition-colors" href="https://github.com/tsa206531" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="hover:text-[#181811] dark:hover:text-white transition-colors" href="https://www.linkedin.com/in/ey-chen-1532971b2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="hover:text-[#181811] dark:hover:text-white transition-colors" href="https://www.yourator.co/r/71f10e99-cbc5-4cd8-91c4-636db45e2e51" target="_blank" rel="noopener noreferrer">CV</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
