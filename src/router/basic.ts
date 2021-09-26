import type { RouteRecordRaw } from 'vue-router'

export const Layout = () => import('@/layouts/index.vue')
export const ExceptionComponent = () => import('@/views/exception/Exception.vue')

export const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/home/index',
  meta: {
    title: 'Root',
  },
}

export const homeRoute: RouteRecordRaw = {
  path: '/',
  name: 'HomeParent',
  component: Layout,
  meta: {
    title: 'Home',
  },
  children: [
    {
      name: 'Home',
      path: 'index',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'Home',
      },
    },
  ],
}

export const PAGE_NOT_FOUND_NAME = 'PageNotFound'
export const pageNotFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: PAGE_NOT_FOUND_NAME + 'Parent',
  component: Layout,
  meta: {
    title: 'ErrorPage404',
  },
  children: [
    {
      path: '/:pathMatch(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: ExceptionComponent,
      meta: {
        title: 'ErrorPage404',
      },
    },
  ],
}

export const REDIRECT_NAME = 'Redirect'
export const redirectRoute: RouteRecordRaw = {
  path: '/redirect',
  name: 'RedirectTo',
  component: Layout,
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: import('@/views/redirect/index.vue'),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
}

const basicRoutes = [rootRoute, homeRoute, pageNotFoundRoute, redirectRoute]

export default basicRoutes
