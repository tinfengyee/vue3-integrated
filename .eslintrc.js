// @ts-check
// 类型检查（//在 .eslintrc.js 第一行使用@ts-check）
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  /* 指定如何解析语法。*/
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended', // eslint-plugin-vue 规则 https://eslint.vuejs.org/rules/
    'eslint:recommended', // eslint 规则 https://cn.eslint.org/docs/rules/
    'plugin:@typescript-eslint/recommended', // // typescript-eslint 规则 https://typescript-eslint.io/rules/
    // 'prettier', // 必须放在后面 。 这个应该可以去掉，下面那个配置自带了
    'plugin:prettier/recommended', // 必须放在后面
    // 'plugin:jest/recommended', // jest
  ],
  overrides: [],
  rules: {
    // 'vue/script-setup-uses-vars': 'error', // vue-eslint-parser使用v9.0.0 或更高版本时不需要此规则。
    '@typescript-eslint/no-var-requires': 'off', // 禁止require除导入语句外的语句
    '@typescript-eslint/no-explicit-any': 'off', // 禁止该any类型。explicit（明确的）
    'no-empty-function': 'off', // Note: you must disable the base rule as it can report incorrect errors
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数。
    'no-use-before-define': 'off', // 在定义之前禁止使用变量。
    '@typescript-eslint/no-use-before-define': 'off', // 在定义之前禁止使用变量。
    '@typescript-eslint/explicit-function-return-type': 'off', // 需要函数和类方法的显式返回类型。
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型。
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止@ts-<directive>注释或要求指令后的描述。
    '@typescript-eslint/ban-types': 'off', // 禁止某些类型
    '@typescript-eslint/no-non-null-assertion': 'off', // !禁止使用后缀运算符的非空断言。foo.bar!.includes('baz'); =》 foo.bar?.includes('baz') ?? false;
    'space-before-function-paren': 'off', // 在函数括号之前强制执行一致的间距。
    '@typescript-eslint/space-before-function-paren': 'off', // 在函数括号之前强制执行一致的间距。
    // vue
    // 强制使用驼峰命名
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false, // 则仅检查已注册的组件
        ignores: ['/^router/'], // 要忽略的元素名称 "/^name/"
      },
    ],
    // 'vue/custom-event-name-casing': 'off', //  强制自定义事件名称为 camelCase
    'vue/attributes-order': 'off', // 强制执行属性顺序
    'vue/v-on-event-hyphenation': 'off', // 对模板中的自定义组件强制执行 v-on 事件命名样式 @customEvent => @custom-event
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为多字 Todo => todo-item
    'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
    // 'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
    'vue/max-attributes-per-line': 'off', // 强制每行的最大属性数
    // 'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    'vue/require-default-prop': 'off', // 需要 props 的默认值
    'vue/html-self-closing': [
      // 强制执行自闭式
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
  globals: {
    Nullable: true,
  },
})
