<template>
  <div class="login-wrapper">
    <div class="model">
      <el-form :model="user" status-icon :rules="rules">
        <div class="title">Login</div>
        <el-form-item prop="userName">
          <el-input type="text" :prefix-icon="User" placeholder="account" v-model="user.userName" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" :prefix-icon="Lock" placeholder="password" v-model="user.userPwd" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" :loading="isLoading" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue'

const instance = getCurrentInstance()
const api = instance?.appContext.config.globalProperties.$api

const user = reactive({
  userName: '',
  userPwd: '',
})

const rules = {
  userName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
  ],
  userPwd: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
}

const isLoading = ref(false)

const login = async () => {
  const { userName, userPwd } = user
  if (!userName || !userPwd) {
    ElMessage.error('请填写完整的用户名和密码')
    return
  }

  isLoading.value = true
  try {
    const data = await api.login({ userName, userPwd })
    console.log(data)
    ElMessage.success('登录成功')
  } catch (error: any) {
    ElMessage.error('登录失败: ' + error.message)
  } finally {
    isLoading.value = false
  }
}

defineComponent({
  name: 'LoginA',
})
</script>

<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;

  .model {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cbd4;

    .title {
      font-size: 38px;
      text-align: center;
      line-height: 1.5;
      margin-bottom: 30px;
    }

    .btn-login {
      width: 100%;
    }
  }
}
</style>
