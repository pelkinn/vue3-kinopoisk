// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import IconAxios from "@/components/icons/IconAxios.vue";
import IconVue from "@/components/icons/IconVue.vue";
import IconEslint from "@/components/icons/IconEslint.vue";
import IconVite from "@/components/icons/IconVite.vue";
import IconVuetify from "@/components/icons/IconVuetify.vue";
import IconPinia from "@/components/icons/IconPinia.vue";
// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
    customVariables: ['~/assets/variables.scss'],
    theme: {
        defaultTheme: 'dark'
    },
    icons: {
        aliases: {
            kpVue: IconVue,
            kpVite: IconVite,
            kpAxios: IconAxios,
            kpEslint: IconEslint,
            kpVuetify: IconVuetify,
            kpPinia: IconPinia
        }
    }
})
