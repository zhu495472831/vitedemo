import type { RouteRecordRaw } from 'vue-router'
import { getRouteName } from './helper/routerHelp'
import basicRoutes, { pageNotFoundRoute } from './basic'

const whiteList = getRouteName(basicRoutes)

const moduleRouteList: RouteRecordRaw[] = []
const modules = import.meta.globEager('./modules/**/*.ts')
const modulesKey = Object.keys(modules)
modulesKey.forEach((key) => {
  const mod = modules[key].default || {}
  const modArr = (Array.isArray(mod) && mod) || [mod]
  moduleRouteList.push(...modArr)
})

export const asyncRoutes = [...moduleRouteList, pageNotFoundRoute]

export { basicRoutes, whiteList }
