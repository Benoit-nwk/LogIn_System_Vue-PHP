import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogIn,
    },
  ],
})

export default router
