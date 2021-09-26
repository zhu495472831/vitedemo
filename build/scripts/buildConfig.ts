import chalk from 'chalk'
import { APP_CONFIG_FILE_NAME, OUTPUT_DIR, APP_CONFIG_FILE_VARIABLE_NAME } from '../constants'
import fs, { writeFileSync } from 'fs-extra'
import { getEnvConfigs, getRootPath } from '../utils'
import pkg from '../../package.json'
/**
 * 创建全局配置文件
 * @param config 配置内容
 * @param variableName 变量名
 * @param configFileName 文件名
 */
export async function createConfigFile(
  config: Recordable<any>,
  variableName = APP_CONFIG_FILE_VARIABLE_NAME,
  configFileName = APP_CONFIG_FILE_NAME,
) {
  try {
    const windowConfigVariableName = `window.${variableName.toUpperCase()}`
    const configFileContent = `
      ${windowConfigVariableName} = ${JSON.stringify(config)};
      Object.freeze(${windowConfigVariableName});
    `.replace(/\s/g, '')
    // 创建目录
    await fs.mkdirp(getRootPath(OUTPUT_DIR))
    // 生成文件
    writeFileSync(getRootPath(OUTPUT_DIR + '/' + configFileName), configFileContent)
    console.log(chalk.cyan(`✨ [${pkg.name}]`) + ` - 配置文件创建成功:`)
    console.log(chalk.gray(OUTPUT_DIR + '/' + chalk.green(configFileName)) + '\n')
  } catch (err) {
    console.log(chalk.red('配置文件创建失败:\n' + err))
  }
}

export function runBuildConfig() {
  const envConfigs = getEnvConfigs()
  createConfigFile(envConfigs)
}
