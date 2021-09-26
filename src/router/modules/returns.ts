import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '../basic'

const returnsRoute: RouteRecordRaw = {
  path: '/returns',
  name: 'Returns',
  component: Layout,
  meta: {
    title: 'Returns',
  },
  redirect: '/returns/index',
  children: [
    {
      path: 'index',
      name: 'ReturnsIndex',
      component: () => import('@/views/returns/index.vue'),
      meta: {
        title: 'ReturnsIndex',
      },
    },
  ],
}

export default returnsRoute
