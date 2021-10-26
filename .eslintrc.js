module.exports = {
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"prettier",
	],
	rules: {
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-empty-interface": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
}
