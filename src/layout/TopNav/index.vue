<!-- 顶部导航index -->
<template>
    <nav class="top-container" :class="{ 'fixed-nav': isFixed }">
        <logo v-if="showLogo" />
        <div class="right-nav">
            <right-nav v-if="rightWidth" />
            <search class="search-box" />
            <github v-if="showGithub" />
            <gitee v-if="showGitee" />
        </div>
    </nav>
</template>

<script setup lang="ts">
import logo from '@/layout/TopNav/logo/index.vue'
import search from '@/layout/TopNav/search/index.vue'
import rightNav from '@/layout/TopNav/rightNav/index.vue'
import github from '@/components/githubIcon/github.vue'
import gitee from '@/components/giteeIcon/gitee.vue'
const rightWidth = ref(true)
const showGithub = ref(true)
const showGitee = ref(true)
const showLogo = ref(true)
function checkSecreenWidth() {
    const width = window.innerWidth
    rightWidth.value = width >= 920
    showGithub.value = width > 500
    showGitee.value = width > 500
    showLogo.value = width > 200
}
const isFixed = ref(false)
const handleScroll = () => {
    // 触发固定滚动距离
    const scrollThreadshould = 100
    isFixed.value = window.scrollY > scrollThreadshould
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
onMounted(() => {
    window.addEventListener('resize', checkSecreenWidth)
})
onUnmounted(() => {
    window.removeEventListener('resize', checkSecreenWidth)
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.module.scss' as *;

.top-container {
    display: flex;
    justify-content: space-between;
    height: 55px;
    background: $top-bg-color;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .right-nav {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-right: 50px;
    }
}

.fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    background-color: rgba(10, 10, 10, 0.7);
    backdrop-filter: blur(30px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
