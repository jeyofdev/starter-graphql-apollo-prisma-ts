module.exports = {
	root: true,
	env: {
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		// sourceType: 'module',
		project: ['./tsconfig.json'],
		// tsconfigRootDir: __dirname,
		createDefaultProgram: true,
	},
	plugins: ['@typescript-eslint'],
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				// project: ['./tsconfig.json'],
			},
			node: {
				extensions: ['.js', '.ts'],
			},
		},
		'import/ignore': ['node_modules'],
	},
	rules: {
		'no-console': 'warn',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
	},
	ignorePatterns: ['.eslintrc.cjs'],
};
