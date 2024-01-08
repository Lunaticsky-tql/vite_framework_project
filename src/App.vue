<template>
  <IduxProvider>
    <router-view />
  </IduxProvider>
</template>

<script setup lang="ts">
//需要在vite.config.ts中配置@componrnts别名
import { IduxProvider } from "@components/idux-provider"
import { RouterView } from "vue-router"
</script>
