import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b596943 = () => interopDefault(import('..\\pages\\auth\\login\\index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _47a0f3c5 = () => interopDefault(import('..\\pages\\auth\\register\\index.vue' /* webpackChunkName: "pages/auth/register/index" */))
const _48630420 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1b3a8da7 = () => interopDefault(import('..\\pages\\detail\\_id.vue' /* webpackChunkName: "pages/detail/_id" */))

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
    component: _6b596943,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _47a0f3c5,
    name: "auth-register"
  }, {
    path: "/",
    component: _48630420,
    name: "index"
  }, {
    path: "/detail/:id?",
    component: _1b3a8da7,
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
