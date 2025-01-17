module.exports = {
	'extends': 'eslint:recommended',
	'env': {
		'node': true,
		'es6': true,
		'browser': true,
		'mongo': true,
	},
	'parserOptions': {
		'ecmaVersion': 2023,
	},
	'rules': {
		'arrow-spacing': ['warn', { 'before': true, 'after': true }],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'curly': ['error', 'multi-line', 'consistent'],
		'dot-location': ['error', 'property'],
		'handle-callback-err': 'off',
		'indent': ['error', 'tab'],
		'keyword-spacing': 'error',
		'max-nested-callbacks': ['error', { 'max': 4 }],
		'max-statements-per-line': ['error', { 'max': 2 }],
		'no-console': 'off',
		'no-empty-function': 'error',
		'no-floating-decimal': 'error',
		'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-multi-spaces': 'warn',
		'no-multiple-empty-lines': ['warn', { 'max': 4, 'maxEOF': 1, 'maxBOF': 0 }],
		'no-shadow': ['error', { 'allow': ['err', 'resolve', 'reject'] }],
		'no-trailing-spaces': ['warn'],
		'no-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'prefer-const': 'error',
		'quotes': ['warn', 'single'],
		'semi': ['warn', 'always'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always',
		}],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'yoda': 'error',
		'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
		'no-unused-vars': 'warn',
		'wrap-regex': 'error',
		'sort-vars': 'warn',
		'no-unreachable': 'warn',
	},
};
