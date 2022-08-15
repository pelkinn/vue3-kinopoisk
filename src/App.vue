<template lang="pug">
v-app
  app-navigation
  v-main
    v-container.min-h-full
      router-view
  notifications(position="bottom right")
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue"

export default {
  name: 'App',
  components: {AppNavigation},
}
</script>
<style scoped>
</style>
