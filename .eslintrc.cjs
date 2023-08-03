/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    // 基础配置
    'eslint:recommended',

    // plugin配置
    'plugin:vue/vue3-essential',
    'plugin:nuxt/recommended',

    // vue类型配置
    '@vue/eslint-config-typescript',
    // 风格配置
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: ['server/**/*.{ts,js}'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
}