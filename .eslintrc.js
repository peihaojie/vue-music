/*
 * @Date         : 2020-02-09 15:50:01
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-02-09 21:01:51
 * @FilePath     : /.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0,
    'no-var': 2,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': 2
  }
}
