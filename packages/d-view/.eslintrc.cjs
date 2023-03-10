module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 1,
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-reserved-component-names': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'no-underscore-dangle': 0,
    'no-nested-ternary': 1,
    'no-shadow': 1,
    'prefer-template': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    // ESLint Problem https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    'no-use-before-define': 0,
    'no-restricted-syntax': 0,
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-bitwise': 0,
    'no-return-assign': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-continue': 0,
    'no-console': 2,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-empty-function': 0,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
