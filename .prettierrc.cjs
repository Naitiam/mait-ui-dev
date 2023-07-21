module.exports = {
  arrowParens: 'always', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid:添加括号）
  bracketSameLine: false, // 对于多行结构（如对象或数组），括号是否与起始位置放在同一行
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"（默认true）
  embeddedLanguageFormatting: 'auto', // 是否对嵌入语言进行格式化。
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  insertPragma: false, // 是否在文件顶部插入格式化的指令。
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  printWidth: 120, // 一行最多 120 字符(默认80)
  proseWrap: 'never', // 是否在 markdown 文件中处理换行。
  quoteProps: 'as-needed',  // 对象的 key 仅在必要时用引号
  requirePragma: false, // 是否在 markdown 文件中处理换行。
  semi: true, // 行尾需要有分号(默认true)
  singleQuote: true, // 是否使用单引号。
  tabWidth: 2,  // 每个tab相当于多少个空格（默认2）
  trailingComma: 'all', // 多行使用拖尾逗号（默认none）
  useTabs: false, // 是否使用tab进行缩进（默认false）
  vueIndentScriptAndStyle: false, // 在 Vue 文件中是否缩进 <script> 和 <style> 标签的内容。
  singleAttributePerLine: false, // 对于 HTML、JSX 属性，是否每个属性都放在单独的行上。
};