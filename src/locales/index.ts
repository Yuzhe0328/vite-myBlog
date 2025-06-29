// @/locale/index.ts
import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import type { Composer, I18n } from 'vue-i18n'
import zh from './zh'
import en from './en'
import kr from './kr'

// 准备 messages
const messages = { zh, en, kr } as const
const availableLocales = Object.keys(messages) as Array<keyof typeof messages>

// 安全地获取 localStorage
function safeGetItem(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
  return null
}
function safeSetItem(key: string, value: string) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value)
  }
}

// 获取初始语言
function determineInitialLocale(): keyof typeof messages {
  if (typeof window === 'undefined') return 'zh'

  const saved = safeGetItem('lang')
  if (saved && availableLocales.includes(saved as keyof typeof messages)) {
    return saved as keyof typeof messages
  }

  const nav = navigator.language || ''
  const primary = nav.split('-')[0].toLowerCase()
  if (availableLocales.includes(primary as keyof typeof messages)) {
    safeSetItem('lang', primary)
    return primary as keyof typeof messages
  }

  safeSetItem('lang', 'zh')
  return 'zh'
}

// 创建 i18n 实例
const i18n: I18n<{}, {}, {}, string, false> = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh: zh || {},
    en: en || {},
    kr: kr || {},
  },
  silentTranslationWarn: process.env.NODE_ENV === 'production',
  missingWarn: false,
  fallbackWarn: false,
  warnHtmlMessage: false
})

// 应用挂载时设置语言
export function setupI18n(app: App) {
  const initialLocale = determineInitialLocale()

  if (process.env.NODE_ENV === 'production') {
    const available = Object.keys(messages)
    if (!available.includes(initialLocale)) {
      i18n.global.locale.value = 'zh'
    }
  }

  const i18nGlobal = i18n.global as unknown as Composer
  i18nGlobal.locale.value = initialLocale as string

  app.use(i18n)
}

// 切换语言
export function switchLocale(newLocale: keyof typeof messages) {
  if (typeof window === 'undefined') return
  if (!availableLocales.includes(newLocale)) return

  const i18nGlobal = i18n.global as unknown as Composer
  i18nGlobal.locale.value = newLocale as string
  safeSetItem('lang', newLocale)
}

export const getAvailableLocales = (): Array<keyof typeof messages> => availableLocales
export default i18n as I18n<{}, {}, {}, string, false>
