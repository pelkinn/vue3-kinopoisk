<template lang="pug">
v-navigation-drawer
  v-list(nav)
    v-list-item(v-for="item in navList" :key="item.to" :to="item.to")
      v-list-item-avatar
        v-icon(size="small" :icon="item.icon")
      v-list-item-title {{ item.title }}
</template>

<script>
import {ref} from "vue";

export default {
  name: "AppNavigation",
  setup() {
    const selectedItem = ref('')
    const navList = ref([
      {
        to: '/',
        title: 'Main',
        icon: 'mdi-home'
      },
      {
        to: '/top-movies',
        title: 'Top movies',
        icon: 'mdi-star'
      },
    ])
    return {
      selectedItem,
      navList
    }
  }
}
</script>

<style scoped>

</style>