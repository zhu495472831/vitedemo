import type { UserConfig, ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { OUTPUT_DIR, TARGET, ASSETS_DIR } from './build/constants'
import { wrapEnv } from './build/utils'
import { createProxy } from './build/vite/proxy'
import { createVitePlugins } from './build/vite/plugins'
import pkg from './package.json'

const pathResolve = (path: string) => {
  return resolve(__dirname, path)
}

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
}

const cfgsFn = ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const viteEnv = loadEnv(mode, root) // 获取当前模式配置文件内容
  const curEnv = wrapEnv(viteEnv)
  const { VITE_PORT, VITE_PROXY, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = curEnv
  const isBuild = command === 'build'
  return {
    root,
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': pathResolve('src'),
        '#/': pathResolve('types/'),
        Utils: pathResolve('src/utils'),
        Apis: pathResolve('src/apis'),
        Assets: pathResolve('src/assets'),
        Composables: pathResolve('src/composables'),
      },
    },
    server: {
      host: true, // = 0.0.0.0
      port: VITE_PORT,
      open: true,
      proxy: createProxy(VITE_PROXY),
    },
    build: {
      target: TARGET,
      outDir: OUTPUT_DIR,
      assetsDir: ASSETS_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      brotliSize: false, // 禁用 brotli 压缩
      chunkSizeWarningLimit: 2000, // chunk 大小警告的限制
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${pathResolve('src/styles/variables.less')}";`,
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    plugins: createVitePlugins(curEnv, isBuild),
    optimizeDeps: {
      include: ['vue', 'ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US'],
    },
  }
}

export default defineConfig(cfgsFn)
