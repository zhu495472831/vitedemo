import type { GetterTree } from 'vuex'
import { State } from './state'
import { TagsViewGetterTypes } from './getter-types'
import { RootState } from '../../index'

export type Getters = {
  [TagsViewGetterTypes.CACHED](state: State): typeof state.cachedViews
  [TagsViewGetterTypes.VISITED](state: State): typeof state.visitedViews
}

export const getters: GetterTree<State, RootState> & Getters = {
  [TagsViewGetterTypes.CACHED]: (state) => state.cachedViews,
  [TagsViewGetterTypes.VISITED]: (state) => state.visitedViews,
}
