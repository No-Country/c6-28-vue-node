import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"



=======
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "material-icons/iconfont/material-icons.css"
>>>>>>> branch_agus




createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

