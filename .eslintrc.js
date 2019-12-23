module.exports = {
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'project': './tsconfig.json'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        eqeqeq: 'error',
        semi: 'error',
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],
        'no-var': 'error',
        quotes: ['error', 'single'],
        'max-lines': ['error', {'max': 500, 'skipComments': true}]
    },
    'settings': {
        'react': {
            'pragma': 'React',  // Pragma to use, default to "React"
            'version': 'detect' // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
        }
    }
};
