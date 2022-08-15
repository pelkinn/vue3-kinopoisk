<template lang="pug">
div
  h1.mb-10 Pet-project Kinopoisk Api Unofficial
  v-card.px-6.pt-4.pb-8
    div.mb-10.text-h5.font-weight-bold Technology
    v-row
      v-col(cols="4" v-for="item in listStack" :key="item.icon")
        .d-flex.align-center.pa-3
          v-icon.mr-4(size="40") {{ item.icon }}
          div.text-h6 {{ item.title }}
</template>
<script>
import {ref} from "vue";
export default {
  setup() {
    const listStack = ref([
      {
        title: 'Vue 3',
        icon: '$kpVue'
      },
      {
        title: 'Vite',
        icon: '$kpVite'
      },
      {
        title: 'Axios',
        icon: '$kpAxios'
      },
      {
        title: 'Eslint',
        icon: "$kpEslint"
      },
      {
        title: 'Vuetify',
        icon: "$kpVuetify"
      },
      {
        title: 'Pinia',
        icon: "$kpPinia"
      }
    ])
    return {listStack}
  }
}
</script>
<style scoped>
:global(.lol) {
  padding-left: 20px;
}
</style>
