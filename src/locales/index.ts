// @/locale/index.ts
import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import zh from './zh'
import en from './en'

// 准备 messages
const messages = { zh, en } as const
const availableLocales = Object.keys(messages) as Array<keyof typeof messages>  // ['zh','en']

// 安全地获取 localStorage
function safeGetItem(key: string): string | null {
  try {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key)
    }
  } catch (e) {
    console.warn('[i18n] localStorage.getItem failed:', e)
  }
  return null
}
function safeSetItem(key: string, value: string) {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value)
    }
  } catch (e) {
    console.warn('[i18n] localStorage.setItem failed:', e)
  }
}

// 运行时获取初始 locale（在 setupI18n 中调用）
function determineInitialLocale(): keyof typeof messages {
  if (typeof window === 'undefined') {
    return 'zh'
  }
  const saved = safeGetItem('lang')
  if (saved && availableLocales.includes(saved as keyof typeof messages)) {
    return saved as keyof typeof messages
  }
  // 浏览器语言检测
  const nav = navigator.language || ''
  const primary = nav.split('-')[0].toLowerCase()
  if (availableLocales.includes(primary as keyof typeof messages)) {
    safeSetItem('lang', primary)
    return primary as keyof typeof messages
  }
  // fallback
  safeSetItem('lang', 'zh')
  return 'zh'
}

// 创建空实例，稍后在 setupI18n 中设置 locale
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh',          // 临时值，后面会在 setupI18n 里重置
  fallbackLocale: 'en',
  messages,
})
// setup 函数在应用启动时调用
export function setupI18n(app: App) {
  // 在浏览器环境下再决定初始 locale
  const initialLocale = determineInitialLocale()
  // 更新 i18n 实例的 locale
  i18n.global.locale.value = initialLocale
  app.use(i18n)
}

// 切换语言
export function switchLocale(newLocale: keyof typeof messages) {
  if (typeof window === 'undefined') return
  if (!availableLocales.includes(newLocale)) {
    console.warn(`[i18n] try to switch to unsupported locale "${newLocale}"`)
    return
  }
  i18n.global.locale.value = newLocale
  safeSetItem('lang', newLocale)
  // 你可在这里或外部调用 Element Plus 切换逻辑
}

export const getAvailableLocales = () => availableLocales
export default i18n
