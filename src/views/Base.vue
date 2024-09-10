<template>
  <div>
    <header class="site-header">
      <nav class="nav_jsxs">
        <img class="logo_jsxs" style="float: left" />
        <router-link to="/Login">登录</router-link>
        <router-link to="/About">关于</router-link>
      </nav>
      <div class="box-text">
        <h1>Fromkso 软件库</h1>
        <p>
          第三方验证对接、云更新、软件库<br />
          <span class="package-amount"
            >共收录了 <strong> 0 </strong>个软件
          </span>
        </p>
        <!-- 搜索框 -->
        <div class="search-warper">
          <div class="form-group">
            <el-input
              placeholder="搜索需要的工具"
              spellcheck="false"
              v-model="searchQuery"
              style="width: 240px"
              clearable
            ></el-input>
          </div>
        </div>
      </div>
    </header>
    <div class="card-list"></div>

    <section class="content content-boxed">
      <p class="p-jsxs">拒绝流量劫持，全面使用 HTTPS！</p>
      <Card
        v-for="api in apis"
        class="block block-link-hover2 ribbon ribbon-modern ribbon-success"
        :key="api.id"
        :title="api.title"
        :description="api.description"
        :calls="api.calls"
        @click="handleCardClick(api)"
      />
    </section>

    <footer>
      <br />
      <h2>我是底部!</h2>
    </footer>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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

const filteredApis = computed(() =>
  this.apis.filter((api) => {
    console.log(api.title.includes(this.searchQuery))
  })
)

const handleCardClick = (apiInfo) => {
  router.push({
    name: 'Api',
    params: {
      apiInfo: JSON.stringify(apiInfo),
      title: apiInfo.title,
    },
  })
}
</script>

<style scoped>
.rounded-input .el-input__inner {
  border-radius: 20px;
}
</style>
