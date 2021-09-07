module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['better-styled-components', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'newline-before-return': 'error',
    'react/state-in-constructor': 'off',
    'import/no-cycle': 'off',
    'global-require': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-named-as-default': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'better-styled-components/sort-declarations-alphabetically': 2,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index', 'unknown'],
        ],
        'newlines-between': 'always',
      },
    ],
    'react-native/no-inline-styles': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
