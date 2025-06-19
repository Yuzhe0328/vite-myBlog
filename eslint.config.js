// eslint.config.js
import { defineFlatConfig } from 'eslint-define-config'
import vuePlugin from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueEslintParser from 'vue-eslint-parser'

export default defineFlatConfig([
  // TypeScript 文件
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
        eqeqeq: "off",
        "no-unused-vars": "error",
        "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
        semi: ["error", "never"]
    },
  },

  // Vue 文件支持
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: { vue: vuePlugin },
    rules: {
        eqeqeq: "off",
        "no-unused-vars": "error",
        "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
        semi: ["error", "never"]
    },
  },

  // 可选 JS 支持（如你项目无 JS 文件，可以删除以下 block）
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    },
    rules: {
        eqeqeq: "off",
        "no-unused-vars": "error",
        "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
        semi: ["error", "never"]    },
  },
  // 忽略构建、依赖、覆盖率等目录
  { ignores: [
    'node_modules/', 
    'dist/', 
    'coverage/', 
    'cypress/e2e/',
    'src/test/',
    'src/auto-imports.d.ts',
    'src/components.d.ts', 
  ]},
  // Prettier 冲突规则关闭
//   {
//     rules: { ...prettierConfig },
//   },
])
