import { createApp } from 'vue'
import App from './App.vue'
import { setupRoute } from '@/router'
import { setupStore } from '@/store'

const app = createApp(App)
setupRoute(app)
setupStore(app)
app.mount('#app')
