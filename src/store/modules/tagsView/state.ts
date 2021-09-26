import { RouteLocationNormalized } from 'vue-router'

export interface TagView extends Partial<RouteLocationNormalized> {
  title?: string
}

export interface State {
  visitedViews: TagView[]
  cachedViews: string[]
}

export const state: State = {
  visitedViews: [],
  cachedViews: [],
}
