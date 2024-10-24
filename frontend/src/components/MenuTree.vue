<template>
  <el-menu-item index="/dashboard/home">
    <el-icon><House /></el-icon>
    <span>首页</span>
  </el-menu-item>
  <el-menu-item index="/dashboard/applications">
    <el-icon><Menu /></el-icon>
    <span>应用管理</span>
  </el-menu-item>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><setting /></el-icon>
      <span>系统管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/dashboard/user">用户管理</el-menu-item>
      <el-menu-item index="/dashboard/filebrower">文件管理</el-menu-item>
      <el-menu-item index="/dashboard/conponents">组件管理</el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>
  <el-menu-item index="/dashboard/about">
    <el-icon><QuestionFilled /></el-icon>
    <span>关于页</span>
  </el-menu-item>
</template>

<script setup></script>

<style></style>
