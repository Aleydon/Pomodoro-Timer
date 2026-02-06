import pluginJs from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginN from 'eslint-plugin-n';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginStorybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: [
			'**/node_modules',
			'packages/react-art/npm/lib',
			'build/',
			'build2/',
			'coverage/',
			'fixtures/',
			'scripts/bench/benchmarks/**/*.js',
			'scripts/bench/remote-repo/',
			'packages/react-devtools-core/dist',
			'packages/react-devtools-extensions/chrome/build',
			'packages/react-devtools-extensions/firefox/build',
			'packages/react-devtools-extensions/shared/build',
			'packages/react-devtools-extensions/src/ErrorTesterCompiled.js',
			'packages/react-devtools-inline/dist',
			'packages/react-devtools-shared/src/hooks/__tests__/__source__/__compiled__/',
			'packages/react-devtools-shared/src/hooks/__tests__/__source__/__untransformed__/',
			'packages/react-devtools-shell/dist',
			'packages/react-devtools-scheduling-profiler/dist',
			'packages/react-devtools-scheduling-profiler/static',
			'dist/'
		]
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				...globals.browser,
				...globals.jest,
				...globals.node
			}
		},
		plugins: {
			react: pluginReact,
			'react-hooks': pluginReactHooks,
			prettier: pluginPrettier,
			jest: pluginJest,
			'simple-import-sort': pluginSimpleImportSort,
			storybook: pluginStorybook,
			import: pluginImport,
			n: pluginN,
			promise: pluginPromise,
			'jsx-a11y': pluginJsxA11y
		},
		settings: {
			react: {
				version: 'detect'
			}
		},
		rules: {
			...pluginReact.configs.recommended.rules,
			...pluginReactHooks.configs.recommended.rules,
			...pluginStorybook.configs.recommended.rules,
			'prettier/prettier': [
				'error',
				{
					singleQuote: true
				}
			],
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/lines-between-class-members': 'off',
			'@typescript-eslint/no-throw-literal': 'off',
			'@typescript-eslint/ban-types': 'off'
		}
	},
	{
		files: ['**/*.cjs'],
		languageOptions: {
			globals: {
				...globals.node
			}
		}
	}
);
