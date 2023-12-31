module.exports = {
    env: {
        node: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['jest'],
};
