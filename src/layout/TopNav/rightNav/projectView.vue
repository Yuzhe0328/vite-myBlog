<template>
  <el-dropdown trigger="hover" popper-class="mega-dropdown">
    <span class="nav-item">{{ t('top.project') }}</span>
    <template #dropdown>
      <div class="mega-menu">
        <!-- 左侧导航 -->
        <div class="menu-left">
          <div class="menu-title">开源项目概览展示</div>
          <ul class="menu-list">
            <li v-for="(item, idx) in projectList" :key="idx" class="menu-item-left"
              :class="{ active: selectIndex === idx }" @mouseenter="onItemMouseEnter(idx)" tabindex="0"
              @keydown="(e) => onItemKeyDown(e, idx)">
              {{ item.name }}
            </li>
          </ul>
        </div>

        <!-- 右侧内容 -->
        <div class="menu-right">
          <transition name="slide">
            <div v-if="selectedItem" key="detail-{{ selectedItem.name }}" class="detail-wrapper">
              <el-card class="project-card" shadow="hover">
                <div class="card-header">
                  <span class="card-title">{{ selectedItem.name }}</span>
                </div>

                <div class="card-body">
                  <p class="card-desc">{{ selectedItem.description }}</p>
                  <div class="card-meta">
                    <span>更新：{{ selectedItem.updateTime }}</span>
                  </div>

                  <ul class="card-features">
                    <li v-for="f in selectedItem.features" :key="f">✔ {{ f }}</li>
                  </ul>

                  <div class="card-tags">
                    <el-tag v-for="tag in selectedItem.tags" :key="tag" size="small" class="tag-item">{{ tag }}</el-tag>
                  </div>

                  <div class="card-tech">
                    <el-tag v-for="tech in selectedItem.techStack" :key="tech" type="info" size="small">{{ tech
                    }}</el-tag>
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
import { ProjectItem } from '@/types/topNav'
const { t } = useI18n()

const projectList = ref<ProjectItem[]>([
  {
    name: '自定义组件库',
    icon: 'el-icon-s-operation',
    description: '一套基于 Vue 3 + TypeScript 打造的高可定制组件库，支持按需引入、主题切换、类型推导和自定义指令，适用于中后台系统快速开发和团队协作统一规范。',
    tags: ['Vue3', '组件库', 'Element Plus'],
    techStack: ['Vue3', 'TypeScript', 'Vite', 'SCSS'],
    features: ['表单封装', '图表封装', '权限按钮', '弹窗组件'],
    updateTime: '2025-06-10',
  },
  {
    name: '后台管理框架',
    icon: 'el-icon-s-management',
    description: '集成 Vue 3、Pinia、Element Plus、Vite 等技术栈的企业级后台管理框架，内置用户权限控制、动态路由、菜单管理、CRUD 快速生成器、标签页导航、主题切换、国际化支持等模块，支持模块化开发，适配多种中后台业务场景。',
    tags: ['后台管理', '脚手架'],
    techStack: ['Vue3', 'Pinia', 'Vite', 'Element Plus'],
    features: ['动态路由', '权限控制', '标签页导航'],
    updateTime: '2025-06-01',
  },
  {
    name: '数据可视化大屏',
    icon: 'el-icon-s-data',
    description: '提供多个实时可视化模块，包括轮播卡片、业务图表、折线统计、柱状对比、区域地图等，适合用于数据驾驶舱、业务监控面板、企业汇报展示。支持响应式设计与动态数据驱动，兼容多种分辨率和显示终端。',
    tags: ['ECharts', '可视化'],
    techStack: ['ECharts', 'Vue3', 'SCSS'],
    features: ['柱状图', '折线图', '轮播组件'],
    updateTime: '2025-05-20',
  },
  {
    name: '全球地图',
    icon: 'el-icon-s-home',
    description: '实现带动画的全球攻击路径模拟，具备攻击线条、目标高亮、国家名称定位、源点闪烁等视觉效果，可广泛应用于网络攻击演示、态势感知平台、安全可视化项目。',
    tags: ['地图', '动画'],
    techStack: ['ECharts', 'GeoJSON', 'Vue3'],
    features: ['多源连线', '轨迹动画', '国家高亮'],
    updateTime: '2025-05-12',
  },
  {
    name: '数据稳定监控',
    icon: 'el-icon-monitor',
    description: '构建类运维平台界面，涵盖实时告警统计、日志分析、多维图表、指标波动趋势监控等内容。可用于业务健康度监测、性能预警分析、异常检测等 DevOps 场景。',
    tags: ['监控', '日志'],
    techStack: ['Vue3', 'ECharts', 'Mock'],
    features: ['图表监控', '异常告警', '日志分析'],
    updateTime: '2025-04-30',
  },
  {
    name: '低代码平台',
    icon: 'el-icon-s-grid',
    description: '通过拖拽方式配置表单、页面布局和交互逻辑，可输出 JSON Schema 或代码模板。支持页面预览、配置导出、运行时渲染，适合构建 SaaS、CMS、运营平台的低代码引擎基础。',
    tags: ['低代码', '配置化'],
    techStack: ['Vue3', 'SortableJS', 'JSON Schema'],
    features: ['组件拖拽', '属性配置', '表单设计器'],
    updateTime: '2025-04-20',
  },
  {
    name: 'AI智能助手',
    icon: 'el-icon-s-opportunity',
    description: '基于自然语言处理构建的智能问答系统，集成上下文记忆、脚本生成器、自动命令执行能力，适合用于 IT 助手、开发辅助、企业自动化脚本运行平台等。',
    tags: ['AI', '自动化'],
    techStack: ['OpenAI API', 'Vue3', 'Prompt Engineering'],
    features: ['问答对话', '代码生成', '脚本执行'],
    updateTime: '2025-04-05',
  },
])

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

<style lang="scss">
@use '@/styles/variables.module.scss' as *;
.mega-dropdown {
  width: calc(100% - 10px);
  height: calc(60% - 1px);
  overflow: hidden;
  border: none !important;
}

.mega-menu {
  display: flex;
  background: $top-bg-color;
  overflow: hidden;
}

.menu-left {
  width: 30%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #333;
  overflow: hidden;
  cursor: pointer;

  .menu-title {
    color: $index-text-color;
    font-weight: 900;
    font-size: 18px;
    margin-left: 40px;
  }

  .menu-item-left {
    color: $index-text-color;
    font-size: 14px;
    padding: 8px 0;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    transition: all 0.3s;

    &:hover {
      background: $index-text-hover-color;
      border-radius: 4px;
    }
  }
}

.menu-right {
  width: 70%;
  padding: 25px;
  background: $top-bg-color;
  color: $index-text-color;

  .detail-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .project-card {
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid #333;
    width: 100%;
    max-width: 540px;
    padding: 20px;

    .card-header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 12px;

      .el-tag {
        margin-left: 10px;
      }
    }

    .card-title {
      font-size: 22px;
      font-weight: bold;
      color: $index-text-color;
    }

    .card-desc {
      font-size: 14px;
      line-height: 1.6;
      color: $card-bg-color;
      margin-bottom: 12px;
    }

    .card-meta {
      font-size: 13px;
      margin-bottom: 10px;
      color: $card-meta-bg-color;
    }

    .card-features {
      margin: 0 0 12px 0;
      padding-left: 20px;
      font-size: 14px;
      color: $card-meta-bg-color;

      li {
        margin-bottom: 4px;
      }
    }

    .card-tags,
    .card-tech {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      margin-bottom: 10px;

      .tag-item {
        background: $tag-item-bg-color;
        color: $index-bg-color;
        border-color: #444;
      }
    }

    .avatar-item {
      display: block;
      margin: 0 auto;
      margin-top: 12px;
      border-radius: 6px;
      max-width: 100%;
      object-fit: cover;
      border: 1px solid #444;
    }
  }
}

.nav-item {
  color: $card-bg-color;
  font-weight: 500;
  cursor: pointer;
  font-size: 15px;
  transition: color 0.3s;
}
</style>
