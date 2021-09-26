import type { Plugin } from 'vite'
import html from 'vite-plugin-html'
import pkg from '../../../package.json'
import { APP_CONFIG_FILE_NAME } from '../../constants'

export function viteHtmlPlugin(curViteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_APP_TITLE, VITE_PUBLIC_PATH } = curViteEnv
  const path = VITE_PUBLIC_PATH.endsWith('/') ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`
  const getCfgFileSrc = () => {
    return `${path}${APP_CONFIG_FILE_NAME}?ver=${pkg.version}-${+new Date()}`
  }

  return html({
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE,
      },
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: getCfgFileSrc(),
              },
            },
          ]
        : [],
    },
    minify: isBuild,
  }) as Plugin[]
}
