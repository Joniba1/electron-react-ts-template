import pluginJs from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import eslintPluginImport from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default [
	pluginJs.configs.recommended,
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
	{
		files: ['src/renderer/**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
			},
			parser: tsParser,
		},
		plugins: {
			'react-hooks': reactHooks,
			import: eslintPluginImport,
			prettier,
			'unused-imports': eslintPluginUnusedImports,
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'padding-line-between-statements': [
				'warn',
				{ blankLine: 'always', prev: 'import', next: '*' },
				{ blankLine: 'any', prev: 'import', next: 'import' },
				{ blankLine: 'always', prev: '*', next: 'return' },
				{ blankLine: 'always', prev: ['block', 'block-like'], next: '*' },
			],
			'import/order': [
				'warn',
				{
					groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
					'newlines-between': 'always',
				},
			],
			'no-undef': 'off',
			'unused-imports/no-unused-imports': 'warn',
			'no-unused-vars': 'warn',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]
