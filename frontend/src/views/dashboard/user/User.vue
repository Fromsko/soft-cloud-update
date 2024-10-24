<template>
  <div class="settings-page">
    <el-card class="settings-card">
      <div class="card-content">
        <h2>个人信息</h2>
        <el-form :model="personalInfo" label-width="120px">
          <el-form-item label="用户名">
            <el-input v-model="personalInfo.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="personalInfo.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="savePersonalInfo">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card class="settings-card">
      <div class="card-content">
        <h2>邀请信息</h2>
        <el-table :data="inviteData" style="width: 100%; height: 100%">
          <el-table-column prop="invitee" label="邀请人"></el-table-column>
          <el-table-column prop="date" label="邀请日期"></el-table-column>
        </el-table>
      </div>
    </el-card>

    <el-card class="settings-card">
      <div class="card-content">
        <h2>接口修改</h2>
        <el-form :model="apiSettings" label-width="120px">
          <el-form-item label="API 地址">
            <el-input v-model="apiSettings.apiUrl"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveApiSettings">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const personalInfo = ref({
  username: '',
  email: '',
})

const apiSettings = ref({
  apiUrl: '',
})

const inviteData = ref([
  { invitee: '用户A', date: '2024-01-01' },
  { invitee: '用户B', date: '2024-01-05' },
])

const savePersonalInfo = () => {
  console.log('个人信息已保存', personalInfo.value)
}

const saveApiSettings = () => {
  console.log('API设置已保存', apiSettings.value)
}
</script>

<style scoped>
.settings-page {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: space-between; /* 保证每个卡片之间的间隔 */
  align-items: stretch; /* 使卡片占满整个宽度 */
  width: 100%;
  height: 100%; /* 使页面占满整个视口高度 */
  padding: 20px;
  box-sizing: border-box; /* 包含内边距和边框在内的总宽高 */
}

.settings-card {
  flex: 1; /* 使卡片占满剩余空间 */
  margin-bottom: 20px; /* 卡片之间的间隔 */
  border-radius: 10px;
  background-color: #ffffff; /* 背景色 */
}

.card-content {
  padding: 20px;
  height: 100%; /* 使内容区域占满整个卡片 */
  overflow: auto; /* 防止内容溢出 */
}
</style>
