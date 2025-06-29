<template>
  <div class="master-top">
    <div class="lines-wrapper">
      <div class="line">{{ contentA }}</div>
      <div class="line">{{ contentB }}</div>
    </div>
    <div class="buttons" v-if="showButtons">
      <div class="description">{{ currentContentC }}</div>
      <el-button class="btn" size="large">{{ t('main.docs') }}</el-button>
      <el-button class="btn-secondary" size="large">{{ t('main.more') }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// 方案 B：带 TS 校验
const emit = defineEmits()

const { t, locale } = useI18n({ useScope: 'global' })

const currentContentA = computed(() => t('main.titleA'))
const currentContentB = computed(() => t('main.titleB'))
const currentContentC = computed(() => t('main.titleC'))

const contentA = ref('')
const contentB = ref('')
const showButtons = ref(false)
const indexA = ref(0)
const indexB = ref(0)
const isTypingA = ref(true)
let timer: number | NodeJS.Timeout

const resetAllAnimations = () => {
  clearInterval(timer)
  contentA.value = ''
  contentB.value = ''
  showButtons.value = false
  indexA.value = 0
  indexB.value = 0
  isTypingA.value = true
}

const startTypingAnimation = () => {
  resetAllAnimations()
  const intervalMs = 100
  timer = setInterval(() => {
    if (isTypingA.value) {
      if (indexA.value < currentContentA.value.length) {
        contentA.value = currentContentA.value.slice(0, indexA.value + 1)
        indexA.value++
      } else {
        isTypingA.value = false
      }
    } else {
      if (indexB.value < currentContentB.value.length) {
        contentB.value = currentContentB.value.slice(0, indexB.value + 1)
        indexB.value++
      } else {
        clearInterval(timer)
        setTimeout(() => {
          showButtons.value = true
          emit('typing-complete')
        }, 100)
      }
    }
  }, intervalMs)
}

watch(locale, startTypingAnimation)
onMounted(startTypingAnimation)
onUnmounted(() => clearInterval(timer))
</script>