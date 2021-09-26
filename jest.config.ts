import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  verbose: true,
  clearMocks: true, // 每次测试之前移除所有的mock调用和实例
  preset: 'ts-jest', // 预配置
  roots: ['<rootDir>/tests/unit'], // 测试文件搜索路径
  moduleDirectories: ['node_modules', 'src'], // 模块文件的搜索目录
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'vue'], // 模块文件的匹配后缀
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'], // NODE_PATH 模块匹配路径
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': 'vue3-jest',
  }, // 转义模块
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: false, // 关闭覆盖率收集，但可以通过jest --converage开启
  coverageReporters: ['json', 'html'], // 覆盖率报表
  coverageDirectory: 'coverage', // 覆盖率存储目录
  collectCoverageFrom: ['src/**/*.{js,ts,vue}'],
  coveragePathIgnorePatterns: ['^.+\\.d\\.ts$'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
