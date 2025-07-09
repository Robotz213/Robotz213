import '@/assets/css/main.css'
import '@/assets/js/color-modes'
import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './default'
const app = createApp(App)
// Add the necessary CSS
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
app.use(pinia)

app.mount('#app')
