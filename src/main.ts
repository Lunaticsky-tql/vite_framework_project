import { createApp } from "vue"
import store from "./store"
import router from "./router"
import { idux } from "./plugins"
import App from "./App.vue"

createApp(App).use(store).use(router).use(idux).mount("#app")
