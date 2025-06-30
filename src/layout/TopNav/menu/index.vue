<template>
    <div>
        <!-- 菜单按钮 -->
        <!-- <menu-icon class="menu-icon" @click="drawer = true" /> -->
        <img :src="menuIcon" @click="drawer = true">
        <!-- 移动端菜单抽屉 -->
        <transition name="fade">
            <div v-if="drawer" class="mobile-drawer-overlay" @click.self="drawer = false">
                <nav class="mobile-drawer">
                    <!-- 顶部logo、搜索和关闭按钮 -->
                    <div class="drawer-header">
                        <img src="@/assets/logo.png" class="logo" alt="Logo" />
                        <span class="title">MengYue</span>
                        <search />
                        <el-icon class="close" @click="drawer = false">
                            <Close />
                        </el-icon>
                    </div>
                    <!-- 菜单内容 -->
                    <ul class="drawer-menu">
                        <li>{{ t('top.project') }}</li>
                        <li>{{ t('top.docs') }}</li>
                        <li @click="toArticle">{{ t('top.article') }}</li>
                        <li @click="toAbout">{{ t('top.about') }}</li>
                        <!-- 语言切换：包一层li，风格就一致 -->
                        <li class="drawer-lang-li">
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
                        </li>
                    </ul>
                </nav>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import menuIcon from '@/components/pxlogo/menu.svg'
import search from '@/layout/TopNav/search/index.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter();
const { t, locale } = useI18n({ useScope: 'global' })
const drawer = ref(false)
const toArticle = () => {
    drawer.value = false
    router.push('/article')
}
const toAbout = () => {
    drawer.value = false
    router.push('/about')
}
function changeLang(lang: 'zh' | 'en' | 'kr') {
    if (locale.value === lang) return
    drawer.value = false
    locale.value = lang
    localStorage.setItem('lang', lang)
}
</script>

<style lang="scss" scoped>
.menu-icon {
    width: 32px;
    height: 32px;
    color: #fff;
    cursor: pointer;
}

// 遮罩
.mobile-drawer-overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(0, 0, 0, 0.72);
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
}

// 抽屉主体
.mobile-drawer {
    width: 100vw;
    max-width: 440px;
    height: 100vh;
    background: #0d1117;
    color: #fff;
    box-shadow: 2px 0 16px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    padding: 0;
    animation: slideIn .2s;
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

.drawer-header {
    display: flex;
    align-items: center;
    padding: 20px 18px 10px 18px;
    gap: 10px;

    .close {
        font-size: 30px;
        margin-top: 4px;
    }
}

.logo {
    width: 32px;
    height: 32px;
    margin-right: 6px;
}

.title {
    font-weight: bold;
    font-size: 20px;
    margin-right: auto;
}

.drawer-menu {
    flex: 0 0 auto;
    list-style: none;
    padding: 0 18px;
    margin: 0;
    font-size: 17px;
    text-align: center;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 0;
        border-bottom: 1px solid #222;
        cursor: pointer;
        position: relative;
        background: transparent;
        transition: background 0.2s;

        &:hover {
            background: #161b22;
        }
    }

    // 语言li也和菜单一样
    .drawer-lang-li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 0;
        border-bottom: 1px solid #222;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: #161b22;
        }

        // el-dropdown触发区域
        .drawer-lang-trigger {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 17px;
            color: #fff;
            cursor: pointer;
            width: 100%;
            justify-content: center;
        }
    }
}

// 完全覆盖el-dropdown下拉菜单样式——必须用深度选择器！
:deep(.el-dropdown-menu) {
    background: #0d1117 !important;
    border: none !important;
    box-shadow: none !important;
    min-width: 120px;
    padding: 0;

    .el-dropdown-menu__item {
        color: #fff !important;
        font-size: 17px;
        text-align: center;
        padding: 14px 0;
        border-bottom: 1px solid #222;
        background: transparent !important;
        transition: background 0.2s;

        &:hover {
            background: #161b22 !important;
            color: #fff !important;
        }

        &:last-child {
            border-bottom: none;
        }
    }
}

// 强制dropdown样式与菜单一致
.custom-dropdown {
    background-color: #101010;
    border: none !important;
    box-shadow: none !important;

    .el-popper__arrow {
        display: none;
    }
}

.custom-dropdown .el-dropdown-menu {
    background-color: #0D1117;
    border: none !important;
}

.custom-dropdown .el-dropdown-menu__item {
    color: #fff;
    font-size: 16px;
    text-align: center;
}

.custom-dropdown .el-dropdown-menu__item:hover {
    background-color: #1a1a1a !important;
}

.language {
    color: white;
    font-size: 17px;
}
</style>