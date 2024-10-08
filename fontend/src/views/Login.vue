<template>
  <div class="login-container">
    <div class="login-box">
      <img src="@/assets/images/qq-logo.png" alt="QQ Logo" class="logo" />
      <el-form :model="loginForm" @keydown.enter="handleSubmit">
        <el-form-item>
          <el-input
            v-model="loginForm.qqNumber"
            placeholder="account"
            :prefix-icon="UserFilled"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="password"
            :prefix-icon="Lock"
            clearable
          ></el-input>
        </el-form-item>
        <el-button type="info" @click="$router.push('/')">返回</el-button>
        <el-button
          type="success"
          @click="handleSubmit"
          :disabled="!loginForm.password"
          :loading="isSending"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script setup>
import storage from '@/utils/storage'
import { Lock, UserFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const isLogin = ref(true)
const isSending = ref(false)
const loginForm = reactive({
  qqNumber: '',
  password: '',
})
const router = useRouter()

const handleSubmit = () => {
  isSending.value = true

  if (loginForm.qqNumber && loginForm.password) {
    isLogin.value = true
    storage.setItem('userInfo', 'sk-Passed')
    ElMessage.success('登录成功')
  } else {
    ElMessage.error('请填写完整的登录信息')
  }
  isSending.value = false
  let timer = setInterval(async () => {
    await router.push('/')
    clearInterval(timer)
  }, 1500)
}

defineComponent({
  name: 'Login',
})
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
