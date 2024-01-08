<script setup lang="ts">
// src/components/idux-provider/IduxProviderRegister.vue
import { useDrawer } from "@idux/components/drawer"
import { useMessage } from "@idux/components/message"
import { useModal } from "@idux/components/modal"
import { useNotification } from "@idux/components/notification"

import { registerProviders } from "@utils" //需要在vite.config.ts中配置@utils别名

const drawer = useDrawer()
const notification = useNotification()
const modal = useModal()
const message = useMessage()

registerProviders({ drawer, notification, modal, message })
</script>

<!-- eslint-disable-next-line vue/valid-template-root -->
<template></template>
