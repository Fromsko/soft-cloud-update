<template>
  <div class="about-layout">
    <h1>关于</h1>
    <br />

    <div class="about-area">
      <el-button-group class="ml-3">
        <el-button type="info" @click="$router.push('/')">主页</el-button>
        <el-button type="info" @click="$router.push('/Login')"
          >登录页</el-button
        >
        <el-button type="success" @click="clearToken">清空登录缓存</el-button>
      </el-button-group>
      <br />
      <p>这是一个基于 Vue3 实现的软件库</p>
      <br />
      <div>
        包含如下功能：
        <ul>
          <li>1. 云更新</li>
          <li>2. 代码编辑器</li>
          <li>3. CI/CD 自动构建</li>
          <li>4. 发卡</li>
          <li>5. 数据统计</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import storage from '@/utils/storage'

const clearToken = () => {
  storage.clearItem('token')
}
export default {
  name: 'about',
  methods: { clearToken },
}
</script>

<style>
.about-area {
  margin: 8px;
}

.about-layout h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-layout .toLogin {
  border: 10px;
  color: blue;
  font-size: large;
}
</style>
