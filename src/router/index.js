import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { ROUTES } from '@/constants'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: Home,
    meta: {
      authApiRequired: true
    }
  },
  {
    path: ROUTES.ADD.path,
    name: ROUTES.ADD.name,
    component: () => import('@/views/add/index.vue'),
    meta: {
      authApiRequired: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(m => m.meta.authApiRequired)) {
    try {
      await store.dispatch('auth/inspectToken')
      next()
    } catch (error) {
      console.error(error)
    }
  } else {
    next()
  }
})

export default router
