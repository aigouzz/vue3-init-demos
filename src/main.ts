import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import UI from '~/index'
import '~/base.scss'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)
UI.install(app);
app.use(store).use(router)
app.mount('#app')

