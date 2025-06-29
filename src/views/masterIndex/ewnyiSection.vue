<template>
    <section class="footer">
            <div class="lines-wrapper">
                <p class="line">{{ t("ewnyiSection.lineone")}}</p>
                <p class="line">{{ t("ewnyiSection.linetwo") }}</p>
            </div>
            <div class="buttons">
                <el-button class="btn" size="large">{{ t('main.docs') }}</el-button>
                <el-button class="btn-secondary" size="large">{{ t('main.more') }}</el-button>
            </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })

</script>

<style lang="scss" scoped>

</style>