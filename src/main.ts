import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import UI from '~/index'
import '~/base.scss'


const app = createApp(App)
// app.use(ElementPlus)

app.use(UI).use(store).use(router)
app.mount('#app')

