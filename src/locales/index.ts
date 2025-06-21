import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const defaultLang = localStorage.getItem('lang') || 'zh'

const i18n = createI18n({
    legacy: false,
    locale: defaultLang,
    fallbackLocale: 'en',
    messages: {
        zh,
        en
    }
})

export default i18n
