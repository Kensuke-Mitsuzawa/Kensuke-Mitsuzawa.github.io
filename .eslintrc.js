module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['google', 'plugin:vue/essential'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', {'code': 200}],
    'quotes': [0, 'double', { 'avoidEscape': true, 'allowTemplateLiterals': true }]
  },
};
