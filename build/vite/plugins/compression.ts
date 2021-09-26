import type { Plugin } from 'vite'
import viteCompression from 'vite-plugin-compression'

export function compressPlugin(compressType: CompressType[]) {
  const plugins: Plugin[] = []

  if (compressType.includes('gzip')) {
    plugins.push(
      viteCompression({
        ext: 'gz',
      }),
    )
  }

  if (compressType.includes('brotli')) {
    plugins.push(
      viteCompression({
        ext: '.br',
        algorithm: 'brotliCompress',
      }),
    )
  }
  return plugins
}
