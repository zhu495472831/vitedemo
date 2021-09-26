import { MutationTree } from 'vuex'
import { TagsViewMutationTypes } from './mutation-types'
import { State, TagView } from './state'

export type Mutations<S = State> = {
  [TagsViewMutationTypes.ADD_VISITED_VIEW](state: S, view: TagView): void
}

export const mutations: MutationTree<State> & Mutations = {
  [TagsViewMutationTypes.ADD_VISITED_VIEW](state, view) {
    if (state.visitedViews.some((v) => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta?.title || 'no-name',
      }),
    )
  },
}
