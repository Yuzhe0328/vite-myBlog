<template>
    <div class="top-bar">
        <projectView />
        <technicalDocs />
        <span @click="toArticle">{{ t('top.article') }}</span>
        <span @click="toAbout">{{ t('top.about') }}</span>
        <el-dropdown popper-class="custom-dropdown">
            <span class="language">{{ t('top.language') }}</span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="toggleLangZh">中文</el-dropdown-item>
                    <el-dropdown-item @click="togglelangEn">English</el-dropdown-item>
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
const { t, locale } = useI18n()

const toArticle = () => router.push('/article')
const toAbout = () => router.push('/about')

// 支持语言切换
const toggleLangZh = () => {
    locale.value = 'zh'
    localStorage.setItem('lang', locale.value) // 可选：记住语言设置
}
const togglelangEn = () => {
    locale.value = 'en'
    localStorage.setItem('lang', locale.value)
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
    border: none !important;
}

.mega-menu {
    .el-dropdown-menu {
        background: $dropdown-bg-color;

        .el-dropdown-menu__item {
            color: $index-text-color;
        }
    }
}
</style>
