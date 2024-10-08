<!--
  File: MenuTree.vue
  Author: Fromsko
  Created At: 2024-09-17
  GitHub: https://github.com/fromsko
  Description: 菜单树
-->

<template>
  <el-menu-item index="/welcome">
    <el-icon><House /></el-icon>
    <span>首页</span>
  </el-menu-item>

  <el-sub-menu index="1">
    <template #title>
      <el-icon><setting /></el-icon>
      <span>系统管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/welcome/User">用户管理</el-menu-item>
      <el-menu-item index="/welcome/Info">文件管理</el-menu-item>
      <el-menu-item index="1-3">接口管理</el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
  <el-menu-item index="2">
    <el-icon><Menu /></el-icon>
    <span>应用集</span>
  </el-menu-item>
  <el-menu-item index="3">
    <el-icon><QuestionFilled /></el-icon>
    <span>关于页</span>
  </el-menu-item>
</template>

<script setup>
import { ref } from 'vue'

const isCollapse = ref(false)
const activeLocal = ref('')
</script>

<style></style>
