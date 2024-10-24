import vue from '@vitejs/plugin-vue';
import path from 'path';
import ElementPlus from 'unplugin-element-plus/vite';
import { defineConfig } from 'vite';


const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  mode: 'production', // development
  plugins: [
    vue(),
    ElementPlus({})
  ],
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  server: {
    hmr: true, // 关闭 HMR
    port: 5173 // 确保指定的端口
  }
})
