import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ['**/*.ts'],
        plugins: {
            playwright,
        },
        rules: {
            'playwright/no-page-pause': 'warn',
            'playwright/no-focused-test': 'error',
        },
    },
];
