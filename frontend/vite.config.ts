import vue from '@vitejs/plugin-vue'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': ''
    },
  },
  server: {
    hmr: true, // 关闭 HMR
    port: 5173 // 确保指定的端口
  }
})
