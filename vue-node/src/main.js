import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,   } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faPhone, )

import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "material-icons/iconfont/material-icons.css"



import "./global.css";





createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(router)
    .use(library)
    .use(store)
    .mount('#app')

