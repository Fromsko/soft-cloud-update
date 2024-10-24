import { createPinia } from 'pinia';
import { createApp } from 'vue';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import api from "@/api";
import App from '@/App.vue';
import router from '@/router';
import request from '@/utils/http/request';
import { useStorage } from '@/utils/storage/';

const app = createApp(App)
const pinia = createPinia()
const storage = useStorage()

app.config.globalProperties.$api = api
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
