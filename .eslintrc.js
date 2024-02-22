module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'plugin:astro/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		// Story files should not be imported
		'no-restricted-imports': ['error', { patterns: ['*.stories'] }],
		// This is not necessary and conflicts with typescript's no unused vars
		'react/react-in-jsx-scope': 'off',
		// This causes false positives when props are correctly inferred
		'react/prop-types': 'off',
		// Empty interfaces are useful as aliases to be filled in later
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ ignoreRestSiblings: true, argsIgnorePattern: '^_' },
		],
	},
}
