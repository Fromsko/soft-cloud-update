<template>
  <div class="api-documentation">
    <h1>{{ apiInfo?.title || '接口标题未定义' }}</h1>
    <div v-html="renderedMarkdown"></div>
  </div>
</template>

<script setup lang="ts">
import { useApiStore } from '@/utils/stores/api' // 引入 store
import { marked } from 'marked'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface ApiInfo {
  id: number
  title: string
  description: string
  calls: number
}

const route = useRoute()
const router = useRouter()

const store = useApiStore() // 获取 store 实例
const apiInfo: ApiInfo = store.apiInfo // 获取存储的 apiInfo 数据

// // 使用类型断言并设置默认值
// const apiInfo: ApiInfo = (route as any).state?.apiInfo || {
//   id: 0,
//   title: '未提供标题',
//   description: '未提供描述',
//   calls: 0,
// }

// 创建接口文档的完整内容
const markdownContent = computed(() => {
  return `
## 请求模式
- **GET** /api/docs/${apiInfo.id}

## 请求格式
\`\`\`json
{
  "title": "${apiInfo.title}",
  "description": "${apiInfo.description}"
}
\`\`\`

## 请求案例
\`\`\`bash
curl -X GET "https://api.example.com/docs/${apiInfo.id}" -H "accept: application/json"
\`\`\`

## 返回结果
\`\`\`json
{
  "code": 200,
  "data": {
    "title": "${apiInfo.title}",
    "description": "${apiInfo.description}",
    "calls": ${apiInfo.calls}
  },
  "message": "成功"
}
\`\`\`

## 调用方式
- 使用 \`Vue\` 中的 \`axios\` 发送请求
\`\`\`javascript
import axios from 'axios';

axios.get('/api/docs/${apiInfo.id}')
  .then(response => {
    console.log(response.data);
  });
\`\`\`
  `
})

const renderedMarkdown = ref('')

// 在组件挂载后渲染 Markdown
onMounted(() => {
  renderedMarkdown.value = marked(markdownContent.value) as string
})
</script>

<style scoped>
.api-documentation {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
}

h2 {
  color: #555;
}

pre {
  background: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
