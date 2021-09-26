import chalk from 'chalk'
import pkg from '../../package.json'
import { runBuildConfig } from './buildConfig'

/**
 * 执行创建配置文件
 */
function run() {
  try {
    const args = process.argv.slice(2)
    if (!args.includes('no-conf')) {
      runBuildConfig()
    }
    console.log(chalk.green(pkg.name + '构建成功'))
  } catch (err) {
    console.log(chalk.red(pkg.name + '构建失败:\n' + err))
  }
}

run()
