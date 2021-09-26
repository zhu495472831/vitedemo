import { ActionTree } from 'vuex'
import { TagsViewActionTypes } from './action-types'
import { TagView, State } from './state'
import type { Mutations } from './mutations'
import { TagsViewMutationTypes } from './mutation-types'
import type { AugmentedActionContext } from '../../types/common'
import { RootState } from '../../index'

type TagsViewAugmentedActionContext = AugmentedActionContext<State, RootState, Mutations>

export type Actions = {
  [TagsViewActionTypes.ADD_VISITED_VIEW](
    { commit }: TagsViewAugmentedActionContext,
    view: TagView,
  ): void
}

export const actions: ActionTree<State, RootState> & Actions = {
  [TagsViewActionTypes.ADD_VISITED_VIEW]({ commit }, view) {
    commit(TagsViewMutationTypes.ADD_VISITED_VIEW, view)
  },
}
