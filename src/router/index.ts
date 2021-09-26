import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { basicRoutes, whiteList } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes,
  scrollBehavior: (to, _, savedPosition) =>
    to.hash.length > 1 ? false : savedPosition || { left: 0, top: 0 },
})

export const resetRoute = () => {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !whiteList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}
export const setupRoute = (app: App) => {
  app.use(router)
}
