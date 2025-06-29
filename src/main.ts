import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from '@/locales'

import * as ElementPlusIconVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// global scss
import '@/styles/index.scss'

import router from '@/router'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconVue)) {
    app.component(key, component)
}

setupI18n(app)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
