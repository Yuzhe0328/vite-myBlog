<script setup lang="ts">
import SvgNode, { SvgNodeProps } from './SvgNodes.vue'
import { Ref } from 'vue'
// Ref<svgNodeProps>接收一个数组
// required: 使用该组件时比如传入属性，否则报错
defineProps({
  inputLines: {
    type: Array as () => Ref<SvgNodeProps>[],
    required: true,
  },
})
</script>

<template>
  <!-- 固定宽高, 样式控制 -->
  <!-- 便利数组，为每个元素生成一个分组(g)，每个分组包含path, svgNode -->
  <svg xmlns="http://www.w3.org/2000/svg" width="785" height="644" viewBox="0 0 844 644" fill="none"
    class="input-lines">
    <!-- Input Lines -->
    <g v-for="inputLine in inputLines" :key="inputLine.value.path">
      <path :d="inputLine.value.path" stroke="url(#base_gradient)" stroke-width="1.2" style="opacity: 0.8" />
      <SvgNode v-bind="inputLine.value" />
    </g>

    <defs>
      <linearGradient id="base_gradient" x1="88.1032" y1="324.167" x2="843.505" y2="324.167"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#c6caff" stop-opacity="0" />
        <stop offset="0.2" stop-color="#c6caff" stop-opacity="0.1" />
        <stop offset="0.4" stop-color="white" stop-opacity="0.4" />
        <stop offset="0.6" stop-color="#c6caff" stop-opacity="0.2" />
        <stop offset="0.8" stop-color="#c6caff" stop-opacity="0.2" />
        <stop offset="0.9" stop-color="#c6caff" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style scoped>
.input-lines {
  position: absolute;
  top: 63%;
  transform: translate3d(0, 0, 0);

  &:deep(.circle-dot) {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
}
</style>