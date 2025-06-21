<!-- 顶部导航index -->
<template>
    <div class="top-container">
        <logo v-if="showLogo" />
        <div class="right-nav">
            <right-nav v-if="rightWidth" />
            <search class="search-box" />
            <github v-if="showGithub" />
            <gitee v-if="showGitee" />
        </div>
    </div>
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
</style>
