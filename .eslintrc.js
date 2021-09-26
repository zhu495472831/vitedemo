module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    // 在函数和类方法上需要显式的返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 禁止使用any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 禁止使用空函数
    '@typescript-eslint/no-empty-function': 'off',
    // 对自定义事件名称强制使用特定的大小写
    'vue/custom-event-name-casing': 'off',
    // 禁止定义前使用
    'no-use-before-define': 'off',
    // 在定义变量之前不允许使用变量
    '@typescript-eslint/no-use-before-define': 'off',
    // 禁止使用@ts-注解
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁止使用特定类型
    '@typescript-eslint/ban-types': 'off',
    // 禁止使用!后缀运算符进行非null断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 在导出的函数和类的公共类方法上需要显式的返回值和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 在函数括号前需要或不允许有空格
    'space-before-function-paren': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
