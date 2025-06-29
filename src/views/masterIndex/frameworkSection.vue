<script setup lang="ts">
import Framework from '@/components/frameWork/index.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { frameworks } from '@/data/framework'
import { useI18n } from 'vue-i18n'
gsap.registerPlugin(ScrollTrigger)
// Framework assets
// import logoAstro from './images/astro.svg'
// import logoNuxt from './images/nuxt.svg'
// import logoVue from './images/vue.svg'
// import logoAnalog from './images/analog.svg'
// import logoPlaywright from './images/playwright.svg'
// import logoMarko from './images/marko.svg'
// import logoStorybook from './images/storybook.svg'
// import logoQwik from './images/qwik.svg'
// import logoVitest from './images/vitest.svg'
// import logoRedwood from './images/redwood.svg'
// import logoSolid from './images/solid.svg'
// import logoAngular from './images/angular.svg'
// import logoReact from './images/react.svg'
// import logoRemix from './images/remix.svg'
// import logoSvelte from './images/svelte.svg'
// import logoLaravel from './images/laravel.svg'
// import logoAdonis from './images/adonis.svg'
// import logoEmber from './images/ember.svg'
// import logoPreact from './images/preact.svg'
// import logoHono from './images/hono.svg'
const { t } = useI18n({ useScope: 'global' })
// Starting parameters
const screenWidth: Ref<number> = ref(1920)
let resizeTimeout: ReturnType<typeof setTimeout> | null = null
let timeline: gsap.core.Timeline | null = null
/**
 * When the resize event fires, update the screen width.
 */
const handleResize = () => {
    screenWidth.value = window.innerWidth
}
/**
 * Throttle the resize event handler.
 */
const throttledResizeHandler = () => {
    if (resizeTimeout === null) {
        resizeTimeout = setTimeout(() => {
            handleResize()
            resizeTimeout = null
        }, 100)
    }
}
onMounted(() => {
    // Set the initial size of the screen
    handleResize()
    // Listen for resize events
    window.addEventListener('resize', throttledResizeHandler)
    // Initialize the GSAP timeline
    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#frameworks-section',
            start: 'top 70%',
            once: true,
        },
    })
    frameworks.forEach((framework, index) => {
        timeline!.set(framework.visible, { value: true }, index * 0.05)
    })
})
onUnmounted(() => {
    // Deregister the throttled event handler
    window.removeEventListener('resize', throttledResizeHandler)
    // Clear any pending execution of the resize handler
    if (resizeTimeout) {
        clearTimeout(resizeTimeout)
        resizeTimeout = null
    }
    // Kill the GSAP timeline
    if (timeline) {
        timeline.kill()
        timeline = null
    }
})
/**
 * How many total blocks (framework or empty) will fit in a single row?
 */
const numBlocksPerRow: ComputedRef<number> = computed(() => {
    return Math.floor(screenWidth.value / (96 + 24))
})
const paddedBlocksPerSide: ComputedRef<number> = computed(() => {
    if (screenWidth.value < 840) {
        return 0
    }
    if (screenWidth.value < 1280) {
        return 1
    }
    if (screenWidth.value < 1600) {
        return 2
    }
    return Math.max(Math.floor((screenWidth.value - 840) / 280), 0)
})
const numFrameworksPerRow = computed(
    () => numBlocksPerRow.value - paddedBlocksPerSide.value * 2,
)
/**
 * How many rows do we need to display all the frameworks?
 */
const numRows: ComputedRef<number> = computed(() => {
    return Math.ceil(frameworks.length / numFrameworksPerRow.value)
})
/**
 * The indexes of the blocks on each row that support framework cards.
 *
 * Note that the index of the returned array is 1-based.
 */
const centerIndexes: ComputedRef<{ start: number; end: number }[]> = computed(
    () => {
        const firstRowsStartIndex = paddedBlocksPerSide.value
        const frameworksPerFirstRows =
            numBlocksPerRow.value - 2 * paddedBlocksPerSide.value
        const lastRowStartIndex =
            paddedBlocksPerSide.value +
            Math.floor(
                (frameworksPerFirstRows -
                    (frameworks.length % frameworksPerFirstRows)) /
                2,
            )
        return new Array(numRows.value + 1).fill(0).map((_, i) => {
            return i < numRows.value ||
                frameworks.length % frameworksPerFirstRows === 0
                ? {
                    start: firstRowsStartIndex,
                    end: numBlocksPerRow.value - paddedBlocksPerSide.value,
                }
                : {
                    start: lastRowStartIndex,
                    end:
                        lastRowStartIndex +
                        (frameworks.length % frameworksPerFirstRows) +
                        1,
                }
        })
    },
)
/**
 * Generate CSS transformations for each row, to gracefully slide between horizontal positions.
 */
const rowStyle: ComputedRef<{ transform: string }> = computed(() => {
    return {
        transform: `translate3d(var(--row-offset), 0, 0)`,
    }
})
</script>

<template>
    <section class="frameworks-section" id="frameworks-section">
        <div class="rebot_title">{{ t("docscenter.docs_title") }}</div>
        <div class="rebot_text">{{ t("docscenter.docs_text") }}</div>
        <div class="frameworks-container">
            <!-- Top Row -->
            <div class="framework-row" :style="rowStyle">
                <Framework v-for="_ in numBlocksPerRow + 2" />
            </div>

            <!-- Logo Rows -->
            <template v-for="rowIndex in numRows">
                <div class="framework-row" :style="rowStyle">
                    <template v-for="columnIndex in numBlocksPerRow + 2">
                        <template v-if="
                            columnIndex - 1 >= centerIndexes[rowIndex].start &&
                            columnIndex - 1 < centerIndexes[rowIndex].end
                        ">
                            <Framework :framework="frameworks[
                                (rowIndex - 1) * numFrameworksPerRow +
                                (columnIndex - 1) -
                                centerIndexes[rowIndex].start
                            ]
                                " />
                        </template>
                        <template v-else>
                            <Framework />
                        </template>
                    </template>
                </div>
            </template>

            <!-- Bottom Row -->
            <div class="framework-row" :style="rowStyle">
                <Framework v-for="_ in numBlocksPerRow + 2" />
            </div>
        </div>
    </section>
</template>
