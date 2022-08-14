import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "material-icons/iconfont/material-icons.css"




createApp(App)
    .use(router)
    .mount('#app')

