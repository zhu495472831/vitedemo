import type { ProxyOptions } from 'vite'
type ProxyItem = [string, string, boolean]
type ProxyList = ProxyItem[]
type ProxyTargetList = Record<string, ProxyOptions>

const httpsRE = /^https:\/\//
/**
 * 根据配置文件中的代理配置生成vite server proxy
 */
export function createProxy(proxyList: ProxyList = []) {
  const ret: ProxyTargetList = {}
  for (const [sPath, target, isRewrite] of proxyList) {
    const isHttps = httpsRE.test(target)
    ret[sPath] = {
      target,
      changeOrigin: true,
      ws: true,
      ...(isRewrite
        ? { rewrite: (path: string) => path.replace(new RegExp(`^${sPath}`), '') }
        : {}),
      ...(isHttps ? { secure: false } : {}),
    }
  }
  return ret
}
