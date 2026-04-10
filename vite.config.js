import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: '/preview-vue.html'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'preview-vue.html'),
        buttonDoc: resolve(__dirname, 'documentation/button.html'),
        toggleDoc: resolve(__dirname, 'documentation/toggle.html'),
        checkboxDoc: resolve(__dirname, 'documentation/checkbox.html'),
        inputDoc: resolve(__dirname, 'documentation/input.html')
      }
    }
  }
})