<template>
  <div class="layout-container">
    <TopBar class="TopNav" />
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

  .TopNav {
    z-index: 100;
  }

  @media (max-width: 768px) {
    .top-container .right-nav {
      margin-right: 20px;
    }
    .top-container .right-nav .top-bar {
      display: none;
    }

    .top-container .right-nav .github-icon {
      display: none;
    }

    .top-container .right-nav .gitee-icon {
      display: none;
    }

    .top-container .header-search-overlay-wrapper .search-icon {
      margin-left: 20px;
    }
  }
}

.main-container {
  flex: 1;
  // padding: 20px;
  background-color: $index-bg-color;
}
</style>