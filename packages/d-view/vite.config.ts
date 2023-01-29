import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import path from 'path';

export default defineConfig({
  plugins: [vue(), vueJSX()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  build: {
    lib: {
      entry: 'index.ts',
      name: 'DView',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
