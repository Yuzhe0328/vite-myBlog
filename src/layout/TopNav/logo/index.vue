<template>
    <div class="logo-container" @click="HomeIasd">
        <img :src="logo" />
        <h1>{{ title }}</h1>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const logo = new URL('@/assets/logo.png', import.meta.url).href
const router = useRouter()
const title = import.meta.env.VITE_APP_TITLE
const HomeIasd = () => {
    router.push('/')
}
</script>
<style lang="scss" scoped>
@use '@/styles/variables.module.scss' as *;

.logo-container {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 50px;
    cursor: pointer;
    
    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        margin-top: 2px;
    }
    h1 {
        margin: 0;
        line-height: 1;
        color: $index-text-color;
        font-weight: 600;
        font-size: 18px;
        font-family: '华文彩云', 'Comic Sans MS', 'Comic Sans', cursive;
        position: relative;
        top: 3px;
        left: 10px;
    }
}
</style>
