<template>
  <div class="login-container">
    <div class="login-box">
      <img src="@/assets/images/qq-logo.png" alt="QQ Logo" class="logo" />
      <el-form :model="userInfo" @keydown.enter="handleSubmit">
        <el-form-item>
          <el-input v-model="userInfo.username" placeholder="account" :prefix-icon="UserFilled" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="userInfo.password" type="password" placeholder="password" :prefix-icon="Lock" clearable></el-input>
        </el-form-item>
        <el-button type="info" @click="$router.push('/')">返回</el-button>
        <el-button type="success" @click="handleSubmit" :disabled="!userInfo.password" :loading="isSending"> 登录 </el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/utils/stores/user'
import { Lock, UserFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isSending = ref(false)
const router = useRouter()
const { login, userInfo } = useUserStore()

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  isSending.value = true

  try {
    await login(userInfo)
    ElMessage.success('登录成功')
    await router.push('/')
  } catch (error: any) {
    ElMessage.error('登录失败: ' + error.message)
  } finally {
    isSending.value = false
  }
}
</script>

<style scoped>
.login-container {
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url('@/assets/images/background.jpg');
}

.login-box {
  width: 90%;
  max-width: 250px;
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .login-box {
    width: 90%;
    max-width: none;
  }
}

.logo {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
