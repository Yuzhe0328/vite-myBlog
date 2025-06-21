<template>
  <div class="layout-container">
    <TopBar />
    <main class="main-container">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from '@/layout/TopNav/index.vue'
</script>

<style lang="scss">
@use '@/styles/variables.module.scss' as *;
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-container {
  flex: 1;
  padding: 20px;
  background-color: index-bg-color;
  overflow-y: auto;
}
</style>
