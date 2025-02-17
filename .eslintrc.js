'use strict';

module.exports = {
    root: true,
    rules: {
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-var': 'error',
        'prefer-const': 'error',
        strict: ['error', 'global'],
    },
    globals: {},
    parserOptions: {
        ecmaVersion: 2020,
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
};
