<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
      <!-- 系统 LOGO -->
      <div class="logo">
        <img src="@/assets/logo.svg" alt="" />
        <span class="nav-side-title">Manager</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu
        :collapse-transition="false"
        :default-active="activeLocal"
        class="nav-menu"
        background-color="#001529"
        text-color="#fff"
        router
        :collapse="isCollapse"
      >
        <MenuTree />
      </el-menu>
    </div>
    <!-- 上层导航栏 -->
    <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
      <div class="nav-top">
        <div class="nav-left">
          <div class="nav-fold" @click="toggle">
            <el-icon><Fold /></el-icon>
          </div>
          <div class="bread">
            <bread-crumb />
          </div>
        </div>
        <div class="user-info">
          <el-badge :is-dot="true" class="notice" type="danger">
            <el-icon><Bell /></el-icon>
          </el-badge>
          <el-dropdown @command="handleCommand">
            <span class="user-link">
              {{ userInfo.userName }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱: {{ userInfo.userEmail }}</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import MenuTree from '@/components/MenuTree.vue'
import { useStorage } from '@/utils/storage'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const storage = useStorage()
const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)
const activeLocal = ref(route.path)
const userInfo = {
  userName: 'Fromsko',
  userEmail: '1614355756@qq.com',
}

const handleCommand = (key) => {
  if (key == 'email') return
  storage.clearItem('userInfo')
  router.push('/')
}

const toggle = () => {
  isCollapse.value = !isCollapse.value
}

// 监听路由变化，更新激活菜单项
watch(
  () => route.path,
  (newPath) => {
    activeLocal.value = newPath
  }
)
</script>

<style lang="scss" scoped>
.basic-layout {
  position: relative;

  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.3s ease-in-out; // 统一过渡时间

    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      overflow: hidden;
      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
      .nav-side-title {
        opacity: 1;
        transition: opacity 0.3s ease-in-out; // 添加透明度过渡
      }
    }

    .nav-menu {
      height: calc(100vh - 60px);
      border-right: none;
      overflow: hidden;
      transition: opacity 0.3s ease-in-out; // 过渡时处理透明度
    }

    &.fold {
      width: 64px;
      transition: width 0.3s ease-in-out;

      .logo .nav-side-title {
        opacity: 0;
      }
    }

    &.unfold {
      width: 200px;
      transition: width 0.3s ease-in-out;
    }
  }

  .content-right {
    margin-left: 200px;
    transition: margin-left 0.3s ease-in-out;

    &.fold {
      margin-left: 64px;
    }

    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      .nav-left {
        display: flex;
        align-items: center;
        .nav-fold {
          margin-right: 10px;
          font-size: 18px;
        }
      }
      .user-info {
        .notice {
          line-height: 30px;
          margin-right: 15px;
        }
        .user-link {
          cursor: pointer;
          color: #409eff;
          line-height: 50px;
        }
      }
    }

    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);

      .main-page {
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
