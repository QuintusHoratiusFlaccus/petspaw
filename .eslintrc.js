module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'quotes': ['error', 'single', 'avoid-escape'],
        'jsx-quotes': ['error', 'prefer-double'],
        'prefer-const': 'warn',
        'eqeqeq': 'warn',
        'semi': ['error', 'never'],
        'complexity': ['warn', 20],
        'no-restricted-globals': ['off', 'self'],
        'no-undef': ['off', 'messages'],
        'eol-last': ['off', 'always'],
        'no-nested-ternary': 'off',
        'consistent-return': 'off',
        'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0 }],
        'react/prop-types': 'off',
        'object-curly-spacing': ['error', 'always'],
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off'
    }
}
