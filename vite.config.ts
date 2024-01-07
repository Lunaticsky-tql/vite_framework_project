import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import autoprefixer from "autoprefixer"
import viteESlint from "vite-plugin-eslint"
import viteStylelint from "vite-plugin-stylelint"
import svgLoader from "vite-svg-loader"
import viteImagemin from "vite-plugin-imagemin"
import vueJsx from "@vitejs/plugin-vue-jsx"
const lessPath = path.resolve("src/style.less")
// 是否为生产环境，在生产环境一般会注入 NODE_ENV 这个环境变量，见下面的环境变量文件配置
const isProduction = process.env.NODE_ENV === "production"
// 填入项目的 CDN 域名地址
const CDN_URL = "https://cdn.maximizer.top"
// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : "/",
  plugins: [
    vue(),
    viteESlint(),
    viteStylelint(),
    svgLoader(),
    vueJsx(),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${lessPath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["last 2 versions", ">1%"]
        })
      ]
    }
  }
})
