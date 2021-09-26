import path from 'path'
import { loadEnv } from 'vite'

/**
 * 解析配置变量，并将变量赋值给process.env
 * @param envCfg env文件配置内容键值对
 * @returns
 */
export function wrapEnv(envCfg: Recordable): ViteEnv {
  const ret: any = {}

  for (const envName of Object.keys(envCfg)) {
    let value = envCfg[envName].replace(/\\n/g, '\n')
    value = value === 'true' ? true : value === 'false' ? false : value

    if (envName === 'VITE_PORT') {
      value = Number(value)
    }
    if (envName === 'VITE_BUILD_COMPRESS') {
      try {
        value = JSON.parse(value)
      } catch (e) {
        value = []
      }
    }
    if (envName === 'VITE_PROXY') {
      try {
        value = JSON.parse(value)
      } catch (e) {
        value = []
      }
    }
    ret[envName] = value
    if (typeof value === 'string') {
      process.env[envName] = value
    } else if (typeof value === 'object') {
      process.env[envName] = JSON.stringify(value)
    }
  }
  return ret
}

/**
 * 获取当前执行命令对应的配置env文件名
 */
export function getConfFiles() {
  const script = process.env.npm_lifecycle_script
  const modeRE = /--mode ([a-z_\\d]+)/gi
  const result = script?.match(modeRE)
  if (result) {
    const mode = result[1]
    return ['env', `env.${mode}`]
  }
  return ['env', 'env.production']
}

/**
 * 获取当前执行命令的mode参数
 * @returns
 */
export function getCurrentScriptMode() {
  const script = process.env.npm_lifecycle_script
  const modeRE = /--mode ([a-z_\\d]+)/gi
  const result = script?.match(modeRE)
  return (result && result[1]) || 'production'
}

/**
 * 获取当前执行命令的mode参数对应的env配置文件内容，并过滤非glob标识参数
 * @param match 匹配标识
 * @param mode 命令mode参数
 * @returns Record<string, string>
 */
export function getEnvConfigs(match = 'VITE_GLOB', mode = getCurrentScriptMode()) {
  const retEnv: Record<string, string> = {}
  const env = loadEnv(mode, process.cwd())
  const envKeys = Object.keys(env)
  for (const key of envKeys) {
    const value = env[key]
    if (key.startsWith(match)) {
      retEnv[key] = value
    }
  }
  return retEnv
}

/**
 * 获取当前脚本根目录
 * @param dir 文件目录
 * @returns
 */
export function getRootPath(dir: string | string[]) {
  if (typeof dir === 'string') {
    dir = [dir]
  }
  return path.resolve(process.cwd(), ...dir)
}

/**
 * 判断process.env.report是否开启
 * @returns
 */
export function isReportMode() {
  return process.env.report === 'true'
}
