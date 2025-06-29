<template>
  <main class="page-root">
    <section class="section-master-top">
      <div class="container">
        <masterTop @typing-complete="onTypingComplete" />
      </div>
    </section>

    <!-- 先保留占位区域，等动画完成后插入实际内容 -->
    <section class="section-master-main-top">
      <div class="container">
        <div v-if="showMasterMainTop">
          <masterMainTop />
        </div>
        <div v-else class="placeholder-master-main-top"></div>
      </div>
    </section>

    <!-- 其余部分，如 heroBackground、masterMainmain -->
    <section class="section-hero-background">
      <heroBackground />
    </section>
    <section class="section-master-main-main">
      <div class="container">
        <masterMainmain />
      </div>
    </section>
    <section>
      <frameworkSection />
    </section>
    <section>
      <footers />
    </section>
    <section class="footer">
      <footerMain />
    </section>
  </main>
</template>

<script setup lang="ts">
import masterTop from '@/views/masterIndex/heroSection.vue'
import masterMainTop from '@/views/masterIndex/featureSection.vue'
import heroBackground from '@/components/heroBackground/index.vue'
import masterMainmain from '@/views/masterIndex/masterSection.vue'
import footerMain from '@/views/masterIndex/footer.vue'
import frameworkSection from '@/views/masterIndex/frameworkSection.vue'
import footers from '@/views/masterIndex/ewnyiSection.vue'

const showMasterMainTop = ref(false)
function onTypingComplete() {
  showMasterMainTop.value = true
}
</script>

<style lang="scss" scoped>
.page-root {
  // width: 100% !important;
  // max-width: 1700px;
  overflow-x: hidden;
  margin: 0 auto;
  position: relative; // 新增
  background-color: #0D1117;

  &::before,
  &::after {
    // 检查伪元素
    display: none !important; // 临时禁用测试
  }


  .section-master-top {
    padding: 2rem 0;
  }

  .section-master-main-top {
    padding: 2rem 0;
  }

  /* 占位区域高度应与 masterMainTop 最小高度相同，以保证页面布局在动画期间位置稳定 */
  .placeholder-master-main-top {
    height: 60vh;
    margin: 0 auto;
    /* 根据 masterMainTop 实际内容高度预留 */
  }

  .section-hero-background {
    position: absolute;
    // max-width: 1470px;
    width: 100%;
    height: 100vh;
    overflow: visible;
    top: 5%;
    left: 50%;
    transform: translate(-50%);
  }

  .section-master-main-main {
    position: relative;
    padding: 2rem 0;
    // max-width: 1485px;
    margin: 0 auto;

  }

  @media (max-width: 768px) {

    .section-master-top,
    .section-master-main-top,
    .section-master-main-main {
      padding: 1.5rem 0;
      // width: 95%;
    }

    .placeholder-master-main-top {
      min-height: 200px;
    }

    .section-hero-background {
      width: 95%;
    }
  }

  .footer {
    position: relative;
    margin: 0 auto;
  }
}
</style>
