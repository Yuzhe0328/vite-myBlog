<template>
  <div class="master-main-top">
    <!-- svg-section 作为相对定位容器，内部的绝对定位或 flex 项目都参照它 -->
    <div class="svg-section">
      <!-- SvgInputs: 例如绘制输入线路 -->
      <div class="svg-inputs-wrapper">
        <SvgInputs :input-lines="inputLines" />
      </div>
      <!-- SvgOutputs: 绘制输出线路，叠加或偏移时使用绝对定位 -->
      <div class="svg-outputs-wrapper">
        <SvgOutputs :output-lines="outputLines" />
      </div>
      <!-- chip 区域 -->
      <div class="chip">
        <div class="chip__background">
          <img :src="logo" class="chip__logo" :class="{ uwu: isUwu }" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgInputs from '@/components/svg-element/SvgInputs.vue'
import SvgOutputs from '@/components/svg-element/SvgOutputs.vue'
import logo from '@/assets/logo.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const showLine = ref(false)
const isUwu = ref(true)
const illuminateLogo = ref(false)

let scrollTriggerInstance: ScrollTrigger | null = null
let timeline: gsap.core.Timeline | null = null

const inputPaths = [
  'M843.505 284.659L752.638 284.659C718.596 284.659 684.866 280.049 653.251 271.077L598.822 255.629L0.675021 1.00011',
  'M843.505 298.181L724.342 297.36C708.881 297.36 693.45 296.409 678.22 294.518L598.822 284.659C592.82 284.659 200.538 190.002 0.675028 164.892',
  'M843.505 311.703L701.108 310.061L598.822 305.136L0.675049 256.071',
  'M843.505 325.224L598.822 326.002L0.675049 321.858',
  'M843.505 338.746L701.108 340.388L598.822 345.442L0.675038 387.646',
  'M843.505 352.268L724.342 353.088C708.881 353.088 693.45 354.039 678.22 355.93L598.822 365.789L0.675067 478.825',
  'M843.505 365.789L752.638 365.789C718.596 365.789 684.866 370.399 653.251 379.372L598.822 394.82L0.675049 642.717',
]
const inputLines: Ref<any>[] = inputPaths.map(path =>
  ref({
    position: 0,
    visible: false,
    labelVisible: false,
    label: '',
    dotColor: undefined,
    glowColor: undefined,
    path,
  }),
)
const outputLines: Ref<any>[] = [
  ref({ position: 0, visible: false, labelVisible: false, label: '.html' }),
  ref({ position: 0, visible: false, labelVisible: false, label: '.css' }),
  ref({ position: 0, visible: false, labelVisible: false, label: '.js' }),
]

onMounted(() => {
  // 触发 ScrollTrigger 时机：当 svg-section 进入视口（可根据需要调整 start/end）
  scrollTriggerInstance = ScrollTrigger.create({
    trigger: '.svg-section',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      timeline = gsap.timeline({
        onComplete: () => {
          const bgEl = document.querySelector('.chip__background')
          if (bgEl) bgEl.classList.add('layered')
          timeline?.kill()
        }
      })
      timeline.to(illuminateLogo, { value: true, duration: 1.2 })
    }
  }),
    setTimeout(() => {
      showLine.value = true
    }, 1000)
})

onUnmounted(() => {
  scrollTriggerInstance?.kill()
  timeline?.kill()
})
</script>
