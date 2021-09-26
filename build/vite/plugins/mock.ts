import { viteMockServe } from 'vite-plugin-mock'
export function mockPlugin(isBuild: boolean) {
  return viteMockServe({
    ignore: /^_/,
    mockPath: 'mock',
    supportTs: true,
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
          import { setupProdMockServer } from '../mock/_createMockServer.ts';
          setupProdMockServer();
        `,
  })
}
