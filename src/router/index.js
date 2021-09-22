import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/score_highlights',
    name: 'ScoreHighlights',
    component: () => import('../components/ScoreHighlights.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(store.getters.isLoggedIn){
            next()
            return
        }
        next('')
    } else {
        next()
    }
})

export default router
