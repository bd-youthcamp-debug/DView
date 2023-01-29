import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [vue(), vueJSX()],
  resolve: {
    alias: {
      '@': fileURLToPath('./'),
    },
  },
});
