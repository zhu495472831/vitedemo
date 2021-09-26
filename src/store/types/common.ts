import type { ActionContext, MutationTree, ActionHandler, DispatchOptions } from 'vuex'

export type AugmentedActionContext<S, R, M extends MutationTree<S>> = {
  commit<K extends keyof M>(key: K, payload: Parameters<M[K]>[1]): ReturnType<M[K]>
} & Omit<ActionContext<S, R>, 'commit'>

export type NoAugmentedActionContext<S, R, M extends MutationTree<S>> = {
  commit<K extends keyof M>(key: K): ReturnType<M[K]>
} & Omit<ActionContext<S, R>, 'commit'>

export type AugmentedActionContextWithDispatch<
  S,
  R,
  M extends MutationTree<S>,
  A extends { [key: string]: ActionHandler<S, R> },
> = {
  commit<K extends keyof M>(key: K, payload: Parameters<M[K]>[1]): ReturnType<M[K]>
} & Omit<ActionContext<S, R>, 'commit'> & {
    dispatch<K extends keyof A>(
      key: K,
      payload?: Parameters<A[K]>[2],
      options?: DispatchOptions,
    ): ReturnType<A[K]>
  }

export type NoAugmentedActionContextWithDispatch<
  S,
  R,
  M extends MutationTree<S>,
  A extends { [key: string]: ActionHandler<S, R> },
> = {
  commit<K extends keyof M>(key: K): ReturnType<M[K]>
} & Omit<ActionContext<S, R>, 'commit'> & {
    dispatch<K extends keyof A>(
      key: K,
      payload?: Parameters<A[K]>[2],
      options?: DispatchOptions,
    ): ReturnType<A[K]>
  }

export type Namespaced<T, N extends string> = {
  [K in keyof T & string as `${N}/${K}`]: T[K]
}
