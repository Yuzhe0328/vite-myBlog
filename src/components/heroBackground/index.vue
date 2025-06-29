<template>
    <div class="hero__background" :class="{ active: illuminateLogo }" />
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const illuminateLogo = ref(false)

let scrollTriggerInstance: ScrollTrigger | null
let timeline: gsap.core.Timeline | null

onMounted(() => {
    scrollTriggerInstance = ScrollTrigger.create({
        trigger: '.hero__background',
        start: 'top 80%', // 当元素顶部到达视口80%位置时触发
        end: 'bottom top', // 当元素底部到达视口顶部时结束
        once: true,
        onEnter: () => {
            timeline = gsap.timeline({
                onComplete: () => {
                    document.querySelector('.chip__background')?.classList.add('layered')
                    timeline?.kill()
                }
            })
            timeline.to(illuminateLogo, { 
                value: true, 
                duration: 2.0 
            })
        }
    })
})

onUnmounted(() => {
    scrollTriggerInstance?.kill()
    timeline?.kill()
})
</script>

<style lang="scss" scoped>
.hero__background {
    position: absolute;
    inset: -70% -20px -70% -20px;
    z-index: 10;
    opacity: 0.4;
    transition: opacity 5s ease;
    background: radial-gradient(circle at right center,
            rgb(86, 50, 119) 0%,
            rgba(74, 55, 140, 1) 30%,
            rgb(65, 114, 194) 55%,
            rgba(50, 81, 115, 0.5) 100%);
    mask-image: radial-gradient(ellipse 300% 30% at center center,
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0) 100%);
    @media (min-width: 1024px) {
        background:
            radial-gradient(circle at right center,
                rgba(75, 41, 105, 0.5) 0%,
                rgb(86, 50, 119) 25%,
                rgba(74, 55, 140, 1) 40%,
                rgb(64, 102, 168) 65%,
                rgba(50, 81, 115, 0.5) 100%);
        mask-image: radial-gradient(ellipse 150% 30% at center center,
                rgba(0, 0, 0, 1) 20%,
                rgba(0, 0, 0, 0.5) 50%,
                rgba(0, 0, 0, 0) 100%);
    }

    @media (min-width: 1500px) {
        background:
            radial-gradient(circle at right center,
                rgba(75, 41, 105, 0.5) 0%,
                rgb(86, 50, 119) 25%,
                rgba(74, 55, 140, 1) 45%,
                rgb(64, 102, 168) 65%,
                rgba(50, 81, 115, 0.5) 100%);
        mask-image: radial-gradient(ellipse 80% 40% at center center,
                rgba(0, 0, 0, 1) 20%,
                rgba(0, 0, 0, 0.5) 50%,
                rgba(0, 0, 0, 0) 100%);
    }

    @media (min-width: 1800px) {
        background:
            radial-gradient(circle at right center,
                rgba(75, 41, 105, 0.5) 0%,
                rgb(86, 50, 119) 25%,
                rgba(74, 55, 140, 1) 50%,
                rgb(64, 102, 168) 70%,
                rgba(50, 81, 115, 0.5) 100%);
        mask-image: radial-gradient(ellipse 80% 40% at center center,
                rgba(0, 0, 0, 1) 20%,
                rgba(0, 0, 0, 0.5) 50%,
                rgba(0, 0, 0, 0) 100%);
    }
    @media (min-width: 768px) {
        opacity: 0.1;
    }

    &.active {
        opacity: 0.4;
        @media (min-width: 768px) {
            opacity: 0.7;
        }
    }
}
</style>
