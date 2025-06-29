<template>
  <el-dropdown trigger="hover" popper-class="mega-dropdown">
    <!-- 触发区域 -->
    <span class="nav-item">{{ t('top.docs') }}</span>

    <template #dropdown>
      <div class="mega-menu">
        <!-- 左侧菜单 -->
        <div class="menu-lefts">
          <div class="menu-title">
            <el-icon class="menu-title-icon">
              <Document />
            </el-icon>
            <span>{{ t('docs.overviewTitle') }}</span>
          </div>
          <ul class="menu-list">
            <li
              v-for="(item, idx) in docsList"
              :key="idx"
              class="docs-nav-item"
              :class="{ 'docs-nav-item--active': selectIndex === idx }"
              tabindex="0"
              @click="onItemClick(idx)"
              @mouseenter="onItemMouseEnter(idx)"
              @keydown.enter.prevent="onItemClick(idx)"
            >
              <!-- 统一使用 Document 图标 -->
              <el-icon class="docs-nav-item__icon">
                <Document />
              </el-icon>
              <span class="docs-nav-item__text">{{ t(item.name) }}</span>  <!-- 用 t() -->
            </li>
          </ul>
        </div>

        <!-- 右侧内容区域 -->
        <div class="menu-right">
          <transition name="fade">
            <div
              v-if="selectedItem"
              :key="`detail-${selectedItem.name}`"
              class="detail-container"
            >
              <!-- 当前分类标题 -->
              <div class="detail-header">
                <el-icon class="detail-header-icon">
                  <Document />
                </el-icon>
                <span class="detail-header-text">{{ t(selectedItem.title!) }}</span>
              </div>
              <!-- 子项展示：示例网格布局 -->
              <div class="detail-body">
                <div
                  v-for="(child, cidx) in selectedItem.children || []"
                  :key="cidx"
                  class="child-card"
                  tabindex="0"
                  @click="navigateTo(child.path)"
                  @keydown.enter.prevent="navigateTo(child.path)"
                >
                  <el-icon class="child-icon">
                    <ArrowRight />
                  </el-icon>
                  <span class="child-text">{{ t(child.label) }}</span>
                </div>
                <!-- 如果 children 为空，可显示“暂无内容”提示 -->
                <div
                  v-if="!(selectedItem.children && selectedItem.children.length)"
                  class="no-content"
                >
                  暂无可用文档
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { docsList } from '@/layout/TopNav/data/docs'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Document, ArrowRight } from '@element-plus/icons-vue'

const { t } = useI18n({ useScope: 'global' })
const router = useRouter()

const selectIndex = ref(0)
const onItemClick = (idx: number) => {
  selectIndex.value = idx
}
const onItemMouseEnter = (idx: number) => {
  selectIndex.value = idx
}

const selectedItem = computed(() => {
  return selectIndex.value >= 0 && selectIndex.value < docsList.value.length
    ? docsList.value[selectIndex.value]
    : null
})

const navigateTo = (path: string) => {
  if (path) {
    router.push(path)
  }
}
</script>
