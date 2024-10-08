<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) of breadList" :key="index">
      <router-link to="/welcome" v-if="index === 0">{{
        item.meta.title
      }}</router-link>
      <span v-else>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import useColorLogOutPut from '@/utils/color_log'

const route = useRoute()
const breadList = ref([])
const log = useColorLogOutPut()

const isHome = (route) => {
  return route.name === 'home'
}

watch(
  () => route.matched,
  (newData) => {
    breadList.value = newData
    if (!isHome(newData[0])) {
      newData = [{ path: '/home', meta: { title: '首页' } }].concat(newData)
    }
    // NOTE: 面包屑
    breadList.value.forEach((item, index) => {
      log.info('面包屑', `${index} ${item.path} ${item.meta.title}`)
    })
  },
  { immediate: true }
)
</script>

<style></style>
