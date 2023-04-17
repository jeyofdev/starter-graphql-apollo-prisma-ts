module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'class-methods-use-this': 0,
	},
	ignorePatterns: ['.eslintrc.cjs'],
};
