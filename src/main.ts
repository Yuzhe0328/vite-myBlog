import { createApp } from 'vue'
import App from './App.vue'

import * as ElementPlusIconVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import i18n from './locales'

// global scss
import '@/styles/index.scss'

import router from '@/router'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconVue)) {
    app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
