<template>
  <div>
    <div class="default-page">
      <header class="site-header">
        <nav class="nav_jsxs">
          <img class="logo_jsxs" style="float: left" />
          <router-link to="/login">登录</router-link>
          <router-link to="/dashboard/home">控制台</router-link>
        </nav>
        <div class="box-text">
          <h1>Fromkso 软件库</h1>
          <p>
            第三方验证对接、云更新、软件库<br />
            <span class="package-amount">共收录了 <strong> 0 </strong>个软件 </span>
          </p>
          <!-- 搜索框 -->
          <div class="search-warper">
            <div class="form-group">
              <el-input placeholder="搜索需要的工具" spellcheck="false" v-model="searchQuery" style="width: 240px" clearable></el-input>
            </div>
          </div>
        </div>
      </header>
      <div class="card-list"></div>

      <section class="content content-boxed">
        <p class="p-jsxs">拒绝流量劫持，全面使用 HTTPS！</p>
        <Card
          v-for="api in apis"
          ref="isClicked"
          :key="api.id"
          :title="api.title"
          :description="api.description"
          :calls="api.calls"
          @click="handleCardClick(api)"
        />
      </section>
    </div>

    <footer>
      <br />
      <h2>我是底部!</h2>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import { reactive, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isClicked = ref(false)
const searchQuery = ref('')

const apis = reactive([
  {
    id: 1,
    title: 'layout_one',
    description: '这是第一种布局方式',
    calls: 10,
    href: '/doc/query/test/demo',
  },
  {
    id: 2,
    title: 'API 2',
    description: '这是 API 2 的描述',
    calls: 5,
    href: '/doc/query/test/demo1',
  },
  {
    id: 3,
    title: 'API 3',
    description: '这是 API 3 的描述',
    calls: 3,
    href: '/doc/query/test/demo2',
  },
  // 添加更多的 API 数据...
])

import { useApiStore } from '@/utils/store/apiStore' // 引入 store

const handleCardClick = (apiInfo: any) => {
  isClicked.value = !isClicked
  const store = useApiStore() // 获取 store 实例
  store.setApiInfo(toRaw(apiInfo)) // 保存数据到 Pinia 状态
  router.push({ name: 'ApiView' }) // 跳转路由
}

// const filteredApis = computed(() =>
//   this.apis.filter((api) => {
//     console.log(api.title.includes(this.searchQuery))
//   })
// )
</script>

<style scoped>
.rounded-input .el-input__inner {
  border-radius: 20px;
}
</style>
