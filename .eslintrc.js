module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:import/typescript',
    './node_modules/ts-standard/eslintrc.json',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowString: false,
        allowNumber: false
      }
    ],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unknown-property': ['error', { ignore: ['jsx'] }]
  },
  ignorePatterns: ['src/**/*.test.ts', 'src/frontend/generated/*']
}
