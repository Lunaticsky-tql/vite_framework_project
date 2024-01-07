import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import viteESlint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';
const lessPath = path.resolve('src/style.less');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteESlint(), viteStylelint()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${lessPath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 2 versions', '>1%']
        })
      ]
    }
  }
});
