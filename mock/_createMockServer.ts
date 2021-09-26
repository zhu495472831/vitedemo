import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 引入该目录下所有的模块, globEager会被转义为如下模式
// import * as __glob__0_0 from './dir/foo.js'
// import * as __glob__0_1 from './dir/bar.js'
// const modules = {
//   './dir/foo.js': __glob__0_0,
//   './dir/bar.js': __glob__0_1
// }
const modules = import.meta.globEager('./**/*.ts')
const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
})

// 生产模式下开启mock的初始化
export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
