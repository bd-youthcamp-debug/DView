module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
  rules: {
    'import-notation': 'string',
    'no-duplicate-selectors': null,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['plugin'] }],
    'rule-empty-line-before': ['always', { except: ['after-single-line-comment', 'first-nested'] }],
  },
};
