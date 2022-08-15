import '@/assets/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueAxios from 'vue-axios'
import axios from './plugins/axios'
import Notifications from '@kyvg/vue3-notification'

loadFonts()

const app = createApp(App)
    .use(router)
    .use(vuetify)
    .use(VueAxios, axios)
    .use(Notifications, {
        timeout: 5000,
        progressBar: true,
        layout: 'topCenter'
    })

app.provide('axios', app.config.globalProperties.axios)
app.provide('$notify', app.config.globalProperties.$notify)
app.mount('#app')