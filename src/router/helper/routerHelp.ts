import type { RouteRecordRaw } from 'vue-router'
export const getRouteName = (arr: RouteRecordRaw[]) => {
  let routeNames: string[] = []
  arr.forEach((route) => {
    const { name } = route
    name && routeNames.push(name as string)
    if (route.children) {
      routeNames = routeNames.concat(getRouteName(route.children))
    }
  })
  return routeNames
}
