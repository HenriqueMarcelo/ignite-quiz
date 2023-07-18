module.exports = {
  extends: '@rocketseat/eslint-config/react',
  rules: {
    'no-unused-vars': 'off',
    'prefer-template': 1,
    'react/jsx-key': 1,
    'prettier/prettier': 1,
    camelcase: 0,
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
}
