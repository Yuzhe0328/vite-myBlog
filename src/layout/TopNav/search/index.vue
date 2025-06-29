<template>
  <div class="header-search-overlay-wrapper">
    <el-icon class="search-icon" @click="openOverlay">
      <Search @click="openOverlay" />
    </el-icon>
    <transition name="fade">
      <div v-if="showOverlay" class="search-overlay" @click.self="closeOverlay">
        <div class="search-container">
          <input ref="inputRef" v-model="searchText" class="search-input" type="text" placeholder="搜索页面"
            @click.stop="showSuggestionsOnce" />
          <ul class="suggestions-list" v-show="suggestionsListRef && filteredList.length > 0">
            <li v-for="(item, idx) in filteredList" :key="idx"
              :class="{ 'suggestion-item': true, 'is-active': idx === highlightedIndex }" @click="selectItem(item)">
              {{ item.value }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { PageOption } from '@/types/topNav'

const suggestionsListRef = ref(false)
const router = useRouter()
const showOverlay = ref(false)
const searchText = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const highlightedIndex = ref(-1)

const pageList: PageOption[] = [
  { value: '首页', path: '/' },
  { value: '关于', path: '/about' },
  { value: '行业文章', path: '/article' },
  { value: '技术文档', path: '/docs' },
  { value: '后台管理框架', path: '/admin' },
  { value: '自定义组件库', path: '/components' },
]

// 空输入返回所有，打开后可展示全部
const filteredList = computed(() => {
  const q = searchText.value.trim().toLowerCase()
  if (!q) {
    return pageList
  }
  return pageList.filter(p =>
    p.value.toLowerCase().includes(q)
  )
})

function openOverlay() {
  showOverlay.value = true
  suggestionsListRef.value = false
  nextTick(() => {
    searchText.value = ''
    highlightedIndex.value = -1
    inputRef.value?.focus()
  })
}

function closeOverlay() {
  showOverlay.value = false
  suggestionsListRef.value = false
  searchText.value = ''
}

function showSuggestionsOnce() {
  if (!suggestionsListRef.value) {
    suggestionsListRef.value = true
  }
}

function selectItem(item: PageOption) {
  closeOverlay()
  if (item.path) {
    router.push(item.path)
  }
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables.module.scss' as *;

.header-search-overlay-wrapper {
  display: flex;
  align-items: center;

  .search-icon {
    cursor: pointer;
    font-size: 27px;
    margin-top: 5px;
    color: $index-text-color;

    &:hover {
      color: $index-text-hover-color;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.2); // 缺少底色导致模糊效果不明显
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30vh;
}

.search-container {
  position: relative;
  width: 70vw;
  max-width: 800px;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  height: 30px;
  padding: 4px 8px;
  font-size: 18px;
  border-radius: 4px;
  background-color: transparent;
  outline: none;

  &:focus {
    border-color: $input-focus-color;
    box-shadow: 0 0 2px rgba(64, 158, 255, 0.6);
  }
}

.suggestions-list {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: $input-max-length;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  z-index: 1001;

  // 滚动条样式
  &::-webkit-scrollbar {
    background-color: $scrollbar-color;
    width: 6px;
    height: 6px;
  }
}

.suggestion-item {
  padding: 6px 12px;
  cursor: pointer;
  color: $index-text-color;

  &:hover {
    background-color: $index-text-hover-color;
  }
}
</style>
