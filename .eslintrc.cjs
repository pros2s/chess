module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'preact',
    'prettier',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:mobx/recommended',
  ],
  plugins: ['@typescript-eslint', 'mobx', 'prettier', 'pross-plugin'],

  rules: {
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling', 'object', 'type'],
        pathGroups: [
          {
            pattern: 'vite',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'preact',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '../**/*.css',
            group: 'parent',
            position: 'after',
          },
          {
            pattern: './**/*.css',
            group: 'sibling',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    curly: 'warn',
    'no-else-return': 2,
    'no-lonely-if': 2,

    'jsx-quotes': ['error', 'prefer-single'],

    // typescript
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    // pross
    'pross-plugin/path-watcher': ['error', { alias: '@' }],
    'pross-plugin/public-api-imports': ['error', { alias: '@' }],
    'pross-plugin/fsd-layer-imports': [
      'error',
      {
        alias: '@',
        ignoreFilesPatterns: ['**/app/**'],
      },
    ],
    // off
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'jest/no-deprecated-functions': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    indent: 'off',

    // mobx
    'mobx/missing-observer': 'off',
  },
};
