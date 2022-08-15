import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PageMain.vue')
    },
    {
      path: '/top-movies',
      name: 'about',
      component: () => import('../views/PageTopMovies.vue')
    }
  ]
})

export default router
