import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const isAuthenticated = localStorage.getItem('auth');
const routes = [
  {
    path: '/find',
    name: 'home',
    component: MainView,
    beforeEnter: () => {
      if(!isAuthenticated) {
        return { name: 'login' }
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: () => {
      if(isAuthenticated) {
        return { name: 'home' }
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes
})

export default router
