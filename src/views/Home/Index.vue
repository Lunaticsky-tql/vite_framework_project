<template>
  <div>首页</div>
  <IxButton mode="primary">Hello Idux</IxButton>
</template>

<script setup lang="ts">
import { IxButton } from "@idux/components/button"
import { useIduxMessage } from "./hooks"

useIduxMessage()
</script>
