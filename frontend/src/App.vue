<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { log } from '@/utils/log/web_log'

log.success('App.vue', '程序成功启动')
</script>

<style lang="sass">
@import "@/assets/style/index.scss"
@import "@/assets/style/oneui.css"
</style>
