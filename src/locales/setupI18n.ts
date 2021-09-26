import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

export let i18n: ReturnType<typeof createI18n>

export function setupI18n(app: App) {
  i18n = createI18n({})
  app.use(i18n)
}
