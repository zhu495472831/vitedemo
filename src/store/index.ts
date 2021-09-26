import { App } from 'vue'
import { createStore, createLogger } from 'vuex'

import { store as tagsView, TagsViewStore, State as TagsViewState } from './modules/tagsView'

export interface RootState {
  tagsView: TagsViewState
}

export type Store = TagsViewStore<Pick<RootState, 'tagsView'>>

const debug = import.meta.env.DEV
const plugins = debug ? [createLogger({})] : []

const store = createStore({
  plugins,
  modules: {
    tagsView,
  },
})

export function setupStore(app: App) {
  app.use(store)
}

export function useStore(): Store {
  return store as Store
}
