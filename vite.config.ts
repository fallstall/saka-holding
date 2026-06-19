import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/saka-holding/',

  plugins: [vue()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/mixins" as *;
          @use "@/assets/styles/variables" as *;
        `
      }
    }
  }
})