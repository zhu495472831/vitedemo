// 键值对类型
declare type Recordable<T = any> = Record<string, T>

// 压缩类型
declare type CompressType = 'gzip' | 'brotli' | 'none'

// 环境配置类型
declare interface ViteEnv {
  VITE_PORT: number
  VITE_USE_MOCK: boolean
  VITE_PUBLIC_PATH: string
  VITE_GLOB_APP_TITLE: string
  VITE_DROP_CONSOLE: boolean
  VITE_BUILD_COMPRESS: CompressType[]
  VITE_LEGACY: boolean
  VITE_USE_IMAGEMIN: boolean
  VITE_PROXY: [string, string, boolean][]
}
