<template>
  Demo Count: {{ count }}
  <button @click="increment">新增</button>
</template>

<script setup lang="ts">
import { useCountStore } from "@store/use_count_store"
import { storeToRefs } from "pinia"
const store = useCountStore()
const { increment } = store
const { count } = storeToRefs(store)
</script>
