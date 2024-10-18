<template>
  <el-breadcrumb :separator-icon="ArrowRight" style="user-select: none">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="index" :to="{ path: item.path }">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { log } from '@/utils/log/web_log'
import { ArrowRight } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadList = ref([])

// 判断是否为首页
const isHome = (route) => route.name === 'DashBoardHomeView'

// 监听路由的变化，更新面包屑
watch(
  () => route.matched,
  (newMatchedRoutes) => {
    log.info('当前路由信息:', newMatchedRoutes)

    let updatedBreadList = [...newMatchedRoutes]

    // 过滤掉 'DashBoardView'，不渲染这个路由
    updatedBreadList = updatedBreadList.filter((item) => item.name !== 'DashBoardView')

    // 如果当前路由不是首页，添加首页到面包屑的最前面
    if (!isHome(updatedBreadList[0])) {
      updatedBreadList = [{ path: '/dashboard/home', meta: { title: '控制台' } }, ...updatedBreadList]
    }

    breadList.value = updatedBreadList
  },
  { immediate: true }
)
</script>
