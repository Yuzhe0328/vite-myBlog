<template>
    <div class="top-bar">
        <projectView />
        <technicalDocs />
        <!-- 文章、关于，使用 t() -->
        <span @click="toArticle">{{ t('top.article') }}</span>
        <span @click="toAbout">{{ t('top.about') }}</span>
        <!-- 语言切换 -->
        <el-dropdown popper-class="custom-dropdown">
            <span class="language">{{ t('top.language') }}</span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="changeLang('zh')">中文</el-dropdown-item>
                    <el-dropdown-item @click="changeLang('en')">English</el-dropdown-item>
                    <el-dropdown-item @click="changeLang('kr')">한구어</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import projectView from './projectView.vue'
import technicalDocs from './technicalDocs.vue'

const router = useRouter()
// 明确指定全局 scope
const { t, locale } = useI18n({ useScope: 'global' })

const toArticle = () => router.push('/article')
const toAbout = () => router.push('/about')

// 统一语言切换逻辑
function changeLang(lang: 'zh' | 'en' | 'kr') {
    if (locale.value === lang) return
    locale.value = lang
    localStorage.setItem('lang', lang)
    // 如果使用 switchLocale 封装，也可调用它：
    // switchLocale(lang)
    // 如果需要切换 Element Plus 语言：
    // updateElementPlusLocale(lang)
}
</script>


<style lang="scss">
@use '@/styles/variables.module.scss' as *;

.top-bar {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 6px;

    span {
        color: $index-text-color;
        cursor: pointer;
        padding: 5px 20px;
        font-size: 16px;
        transition: color 0.2s;

        &:hover {
            color: $index-text-hover-color;
        }
    }
}

.custom-dropdown {
    background-color: #101010;
    border: none !important;
    box-shadow: none !important;
    .el-popper__arrow {
        display: none;
    }

}
/* 同时强制修改 el-dropdown-menu 的背景色 */
.custom-dropdown .el-dropdown-menu {
    background-color: #101010;
    border: none !important;
}

/* 设置下拉项的颜色、hover 背景（可选） */
.custom-dropdown .el-dropdown-menu__item {
    color: #fff;
}


.custom-dropdown .el-dropdown-menu__item:hover {
  background-color: #1a1a1a !important;
}
</style>
