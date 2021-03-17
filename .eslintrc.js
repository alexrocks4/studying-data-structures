module.exports = {
    "extends": "airbnb-base",
    env: {
      es2021: true
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaVersion: 12,
    },
    "rules": {
      'import/extensions': ['error', 'ignorePackages', {
        js: 'always',
        mjs: 'never',
        jsx: 'never',
      }],
    },
};
