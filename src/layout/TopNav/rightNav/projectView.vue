<template>
  <el-dropdown trigger="hover" popper-class="mega-dropdown">
    <span class="nav-item">{{ t('top.project') }}</span>
    <template #dropdown>
      <div class="mega-menu">
        <!-- 左侧导航 -->
        <div class="menu-left">
          <div class="menu-title">{{ t('project.overviewTitle') }}</div>
          <ul class="menu-list">
            <li
              v-for="(item, idx) in projectList"
              :key="idx"
              class="menu-item-left"
              :class="{ active: selectIndex === idx }"
              @mouseenter="onItemMouseEnter(idx)"
              tabindex="0"
              @keydown="(e) => onItemKeyDown(e, idx)"
            >
              <i :class="item.icon" class="menu-item-icon" aria-hidden="true"></i>
              <span class="menu-item-text">{{ t(item.name) }}</span>
            </li>
          </ul>
        </div>

        <!-- 右侧内容 -->
        <div class="menu-right">
          <transition name="slide">
            <div v-if="selectedItem" :key="'detail-' + selectedItem.name" class="detail-wrapper">
              <el-card class="project-card" shadow="hover">
                <div class="card-header">
                  <span class="card-title">{{ t(selectedItem.name) }}</span>
                </div>

                <div class="card-body">
                  <p class="card-desc">{{ t(selectedItem.description!) }}</p>
                  <div class="card-meta">
                    <span>{{ selectedItem.updateTime }}</span>
                  </div>

                  <ul class="card-features">
                    <li v-for="f in selectedItem.features" :key="f">✔ {{ t(f) }}</li>
                  </ul>

                  <!-- <div class="card-tags">
                    <el-tag v-for="tag in selectedItem.tags" :key="tag" size="small" class="tag-item">{{ t(tag) }}</el-tag>
                  </div> -->

                  <div class="card-tech">
                    <el-tag v-for="tech in selectedItem.techStack" :key="tech" type="info" size="small">
                      {{ t(tech) }}
                    </el-tag>
                  </div>
                </div>
              </el-card>
            </div>
          </transition>
        </div>
      </div>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { projectList } from '@/layout/TopNav/data/project'
const { t } = useI18n()

const selectIndex = ref<number>(0)

const onItemMouseEnter = (idx: number) => {
  selectIndex.value = idx
}

function onItemKeyDown(e: KeyboardEvent, idx: number) {
  if (e.key === 'Enter' || e.key === ' ') {
    selectIndex.value = idx
    e.preventDefault()
  }
}

const selectedItem = computed(() => {
  return selectIndex.value >= 0 && selectIndex.value < projectList.value.length
    ? projectList.value[selectIndex.value]
    : null
})
</script>
