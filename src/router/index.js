import { createRouter, createWebHistory } from 'vue-router'

import RepositoryView from '../views/RepositoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RepositoryView
    },
    
  ]
})

export default router
