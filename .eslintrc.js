module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
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
	settings: {
		react: {
			version: 'detect',
		},
	},
}
