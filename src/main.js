import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import "./assets/css/styles.css"

const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
