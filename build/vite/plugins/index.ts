import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import windiCSS from 'vite-plugin-windicss'
import { viteSvgIconsPlugin } from './svgSprite'
import { viteHtmlPlugin } from './html'
import { antDesignVuePlugin } from './antDesignVue'
import { visualizerPlugin } from './visualizer'
import { imageminPlugin } from './imagemin'
import { compressPlugin } from './compression'
import { mockPlugin } from './mock'

export function createVitePlugins(curViteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = []

  const { VITE_LEGACY, VITE_USE_IMAGEMIN, VITE_BUILD_COMPRESS, VITE_USE_MOCK } = curViteEnv
  // vue插件
  vitePlugins.push(vue())

  // jsx插件
  vitePlugins.push(vueJsx())

  // windicss库插件
  vitePlugins.push(windiCSS())

  // svg精灵插件
  vitePlugins.push(viteSvgIconsPlugin(isBuild))

  // html插件
  vitePlugins.push(viteHtmlPlugin(curViteEnv, isBuild))

  // ant design vue按需加载插件
  vitePlugins.push(antDesignVuePlugin())

  // 打包分析插件
  vitePlugins.push(visualizerPlugin())

  // mock插件配置
  VITE_USE_MOCK && vitePlugins.push(mockPlugin(isBuild))

  if (isBuild) {
    // 构建模式下开启老浏览器兼容
    VITE_LEGACY && vitePlugins.push(legacy())

    // 图片压缩
    VITE_USE_IMAGEMIN && vitePlugins.push(imageminPlugin())

    // 开启GZIP压缩
    vitePlugins.push(compressPlugin(VITE_BUILD_COMPRESS))
  }

  return vitePlugins
}
