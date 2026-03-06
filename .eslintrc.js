module.exports = {
    env: {
        node: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'consistent-return': 'off',
        'no-underscore-dangle': 'off',
        'func-names': 'off',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'max-len': ['error', { code: 120, ignoreComments: true }],
    },
};
