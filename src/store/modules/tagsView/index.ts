import { Module, Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'
import { state } from './state'
import type { State } from './state'
import { getters, Getters } from './getters'
import { mutations, Mutations } from './mutations'
import { actions, Actions } from './actions'
import { RootState } from '../../index'
import type { Namespaced } from '../../types/common'

export { State }

type NamespacedMutations = Namespaced<Mutations, 'tagsView'>
type NamespacedActions = Namespaced<Actions, 'tagsView'>

export type TagsViewStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'> & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
} & {
  commit<K extends keyof NamespacedMutations, P extends Parameters<NamespacedMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<NamespacedMutations[K]>
} & {
  dispatch<K extends keyof NamespacedActions>(
    key: K,
    payload?: Parameters<NamespacedActions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<NamespacedActions[K]>
}

export const store: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
