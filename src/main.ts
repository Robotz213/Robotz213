import '@/assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './default'
const app = createApp(App)

// Add the necessary CSS
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/css/bootstrap.css'

app.use(pinia)

app.mount('#app')
