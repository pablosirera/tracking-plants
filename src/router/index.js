import Vue from 'vue'
import VueRouter from 'vue-router'
import { ROUTES } from '@/constants'
import Home from '../views/home/index.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    meta: {
      authRequired: true
    },
    component: Home
  },
  {
    path: ROUTES.ADD.path,
    name: ROUTES.ADD.name,
    meta: {
      authRequired: true
    },
    component: () => import('@/views/add/index.vue')
  },
  {
    path: ROUTES.DETAIL.path,
    name: ROUTES.DETAIL.name,
    props: true,
    meta: {
      authRequired: true
    },
    component: () => import('@/views/detail/index.vue')
  },
  {
    path: ROUTES.AUTH.path,
    name: ROUTES.AUTH.name,
    component: () => import('@/views/auth/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.authRequired)

  if (requiresAuth && !currentUser) next({ path: ROUTES.AUTH.path })
  else if (!requiresAuth && currentUser) next()
  else next()
})

export default router
