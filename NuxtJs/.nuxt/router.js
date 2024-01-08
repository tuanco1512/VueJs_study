import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _cfcf59e6 = () => interopDefault(import('..\\pages\\auth\\login\\index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _64693dbb = () => interopDefault(import('..\\pages\\auth\\register\\index.vue' /* webpackChunkName: "pages/auth/register/index" */))
const _60351834 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _e069ebb8 = () => interopDefault(import('../pages/auth/login/index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _73de571e = () => interopDefault(import('../pages/auth/register/index.vue' /* webpackChunkName: "pages/auth/register/index" */))
const _35cfcf83 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _596073ca = () => interopDefault(import('../pages/detail/_id.vue' /* webpackChunkName: "pages/detail/_id" */))
>>>>>>> CallAPI

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth/login",
<<<<<<< HEAD
    component: _cfcf59e6,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _64693dbb,
    name: "auth-register"
  }, {
    path: "/",
    component: _60351834,
=======
    component: _e069ebb8,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _73de571e,
    name: "auth-register"
  }, {
    path: "/",
    component: _35cfcf83,
>>>>>>> CallAPI
    name: "index"
  }, {
    path: "/detail/:id?",
    component: _596073ca,
    name: "detail-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
