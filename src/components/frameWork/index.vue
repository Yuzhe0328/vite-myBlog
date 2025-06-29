<script setup lang="ts">
import { Ref, ref } from 'vue'

/**
 * A single framework or tool to display in the frameworks section.
 */
export interface Framework {
  /**
   * The name of the framework.
   */
  name?: string

  /**
   * A string representing the URL of the logo in SVG format.
   */
  logo?: string

  /**
   * A string representing the hex color of the glow effect.
   */
  color?: string

  /**
   * A string representing the URL of the framework/tool's homepage.
   */
  url?: string

  /**
   * Whether the framework card is visible or not.
   */
  visible: Ref<boolean>
}

interface Props {
  framework?: Framework
}

const props = withDefaults(defineProps<Props>(), {
  framework: (): Framework => ({
    visible: ref(true),
  }),
})
</script>

<template>
  <component :is="props.framework.url ? 'a' : 'div'" :href="props.framework.url ? props.framework.url : undefined"
    target="_blank" rel="noopener" class="framework-card" :style="{ '--glow-color': props.framework.color }"
    :class="{ active: props.framework.visible.value === true }">
    <img v-if="props.framework.logo" :src="props.framework.logo" :alt="props.framework.name" />
  </component>
</template>
