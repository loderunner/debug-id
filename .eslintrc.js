/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prefer-const': 'error',
    'no-var': 'error',
    camelcase: 'error',
    curly: 'error',
    'default-case-last': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-else-return': 'error',
    'no-extra-parens': 'error',
  },
};
