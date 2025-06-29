<template>
  <div class="master-main-main">
    <section class="components">
      <!-- 原始组件区 -->
      <img :src="rebot" class="rebot" alt="robot" ref="robotImg" />
      <div class="rebot_title">{{ t('masterSection.rebot_title') }}</div>
      <div class="rebot_text">{{ t('masterSection.rebot_text') }}</div>
      <div class="border-box">
        <div class="content-box">
          <el-button>111</el-button>
        </div>
      </div>
      <section class="card-grid">
        <div v-for="idx in 3" :key="idx" class="card">
          <div class="card-icon">{{ ['🚀', '💡', '🔧'][idx - 1] }}</div>
          <!-- <h3 class="card-title"> {{ idx - 1 }}</h3> -->
          <p class="card-desc">{{ t('masterSection.card_title') }}</p>
          <el-button size="small">{{ t('masterSection.small') }}</el-button>
        </div>
      </section>
      <section class="features-section">
        <h2 class="section-title">{{ t('masterSection.section_title') }}</h2>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">🔥</div>
            <h3 class="feature-title">{{ t('masterSection.feature_title') }}</h3>
            <p class="feature-text">{{ t('masterSection.feature_text') }}</p>
          </div>
          <div class="feature">
            <div class="feature-icon">⚙️</div>
            <h3 class="feature-title">{{ t('masterSection.feature_title_yi') }}</h3>
            <p class="feature-text">{{ t('masterSection.feature_text_yi') }}</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">{{ t('masterSection.feature_title_er') }}</h3>
            <p class="feature-text">{{ t('masterSection.feature_text_er') }}</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🎨</div>
            <h3 class="feature-title">{{ t('masterSection.feature_title_san') }}</h3>
            <p class="feature-text">{{ t('masterSection.feature_text_san') }}</p>
          </div>
        </div>
      </section>
    </section>

    <section class="datalineaction">
      <div class="icon">🌍</div>
      <h2 class="title">{{ t('masterSection.title_earth') }}</h2>
      <div class="dataline-wrap">
        <div class="map-area">
          <ComponentEarth class="earth" />
        </div>
        <div class="dataline-content">
          <div class="text-area">
            <ul class="features">
              <li>{{ t('masterSection.features_li_yi') }}</li>
              <li>{{ t('masterSection.features_li_er') }}</li>
              <li>{{ t('masterSection.features_li_san') }}</li>
              <li>{{ t('masterSection.features_li_si') }}</li>
              <li>{{ t('masterSection.features_li_wu') }}</li>
              <li>{{ t('masterSection.features_li_liu') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import rebot from '@/components/pxlogo/rebot.svg'
import ComponentEarth from '@/components/Earth/ComponentEarth.vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const { t } = useI18n({ useScope: 'global' })
const robotImg = ref<HTMLImageElement | null>(null)
// starting parameters
const screenWidth: Ref<number> = ref(1920)
let timeline: gsap.core.Timeline | null = null

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  handleResize()
  // 渲染小图标 
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      (e.target as HTMLElement).classList.toggle('show', e.isIntersecting)
    }),
    { threshold: 0.1 }
  )
  if (robotImg.value) io.observe(robotImg.value)
})
onUnmounted(() => {
  if (timeline) {
    timeline.kill()
    timeline = null
  }
})
</script>
