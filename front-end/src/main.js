import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from './router/index.js'

import App from './App.vue'

const app = createApp(App)
app.use(router) // su dung router
app.mount('#app')
