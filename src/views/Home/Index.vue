<template>
  <div>首页</div>
  <IxButton mode="primary">Hello Idux</IxButton>
</template>

<script setup lang="ts">
import { useIduxMessage } from "./hooks"

useIduxMessage()
</script>
