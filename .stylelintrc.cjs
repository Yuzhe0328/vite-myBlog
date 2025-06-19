// .stylelintrc.cjs
module.exports = {
  extends: [
    '@stylistic/stylelint-config',
    'stylelint-config-recommended-vue'
  ],
  plugins: [],
  overrides: [
    {
      files: ['**/*.vue', '**/*.html'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    // 可加自定义规则或禁用部分不需要的
    'no-empty-source': null,
  }
}
