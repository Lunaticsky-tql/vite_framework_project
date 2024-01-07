<template>
  <div class="demo">
    <div class="demo-text">demo text</div>
    <logoImg />
    <img :src="imageUrl" alt="mikage" width="200" />
    <div>
      App Count: {{ count }}
      <button @click="increment">新增</button>
    </div>
    <br />
    <DemoCmponent />
    <div style="margin-top: 30px">
      测试路由
      <button @click="goHome">去首页</button>
      <button @click="goLogin">去登录页</button>
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterView, useRouter } from "vue-router"
import logoImg from "@assets/vue.svg"
import { useCountStore } from "@store/use_count_store"
import { storeToRefs } from "pinia"
import DemoCmponent from "./components/DemoComponent.vue"
const imageUrl = `${import.meta.env.VITE_IMG_BASE_URL}/img/fan1.png`
const store = useCountStore()
const { increment } = store
const { count } = storeToRefs(store)
const router = useRouter()
const goHome = () => {
  router.push({
    path: "/home"
  })
}
const goLogin = () => {
  router.push({
    path: "/login"
  })
}
</script>
<style lang="less" scoped>
@color: red;

.demo {
  &-text {
    color: @color;
    text-decoration: dashed;
  }
}
</style>
