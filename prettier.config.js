module.exports = {
  printWidth: 100, // 每行长度
  tabWidth: 2, // tab键宽度
  useTabs: false, // 缩进是否使用制表符tab
  semi: false, // 是否使用分号
  vueIndentScriptAndStyle: true, // Vue文件是否使用缩进
  singleQuote: true, // 是否使用单引号
  quoteProps: 'as-needed', // 对象属性的引号使用 [ 'as-needed(仅需要的时候使用)', 'consistent(有一个需要引号，则都需要)', 'preserve（保留用户输入）']
  bracketSpacing: true, // 字面量对象括号中的空格true: { a: b } false {a: b}
  trailingComma: 'all', // 末尾逗号 ['none(末尾没有逗号)', 'es5(es5有效的地方添加)', 'all(在可能的地方都加上逗号)']
  jsxBracketSameLine: false, // 在jsx中同一样使用尖括号
  jsxSingleQuote: false, // SX中是否使用单引号
  arrowParens: 'always', // 箭头函数中的括号 ['avoid在有需要的时候使用', 'always一直使用']
  insertPragma: false, // 在文件的顶部插入一个@format的特殊注释，以表明改文件已经被Prettier格式化
  requirePragma: false, // 严格按照文件顶部的一些特殊的注释格式化代码
  proseWrap: 'never', // 格式化Markdown文件不折行
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto', // 行末尾标识 ['auto', 'lf', 'crlf', 'cr']
}
