<!-- src/components/icons/GiteeIcon.vue -->
<template>
  <svg :width="size" :height="size" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="gitee-icon">
    <a href="https://github.com/your-repo" target="_blank" class="github-icon">
      <!-- 白色背景 -->
      <path fill="#FFFFFF" d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z" />
      <!-- 黑色 G 图标 -->
      <path fill="#000000"
        d="M353.9 288c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320v-96H416V384h192v64h-96v96h192c17.7 0 32-14.3 32-32V352c0-35.3-28.7-64-64-64H353.9z" />
    </a>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 30
  }
})
</script>

<style scoped>
.gitee-icon {
  transition: all 0.3s ease;
  vertical-align: middle;
  display: inline-block;
}
</style>
