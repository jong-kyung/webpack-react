module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/strict',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'no-underscore-dangle': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.ts', '.tsx']
			}
		],
		'no-useless-catch': 'off'
	}
};
