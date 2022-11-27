import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetCardView from '../views/ProjetCardView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'ProjetCard',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/stack',
      name: 'stack',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TechnoView.vue')
    },
    {
      path: '/projets/perso',
      name: 'perso',
      component: () => import('../views/ProjetCardView.vue')
    },
    {
      path: '/contact',
      name: 'caca',
      component: () => import('../views/testFormVue.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import('../views/ThanksView.vue')
    },
  ]
})

export default router
