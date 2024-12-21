import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,mjs,css}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
    },
    plugins: {
      react,
      'react-native': reactNative,
      prettier,
      '@typescript-eslint': typescriptEslint,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // General
      'no-console': 'warn',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',

      // React Native
      'react-native/no-inline-styles': 'off',
      'react-native/split-platform-components': 'off',

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
