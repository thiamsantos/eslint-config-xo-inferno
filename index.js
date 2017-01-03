'use strict';
module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: [
		'inferno'
	],
	rules: {
		'inferno/forbid-component-props': 2,
		'inferno/no-children-prop': 2,
		'inferno/no-danger': 2,
		'inferno/no-danger-with-children': 2,
		'inferno/no-deprecated': 2,
		'inferno/no-did-update-set-state': 2,
		'inferno/no-direct-mutation-state': 2,
		'inferno/no-find-dom-node': 2,
		'inferno/no-is-mounted': 2,
		'inferno/no-render-return-value': 2,
		'inferno/no-string-refs': 2,
		'inferno/no-unescaped-entities': 2,
		'inferno/no-unknown-property': 2,
		'inferno/no-unused-prop-types': 2,
		// 'inferno/prop-types': 2,
		'inferno/inferno-in-jsx-scope': 2,
		'inferno/self-closing-comp': 2,
		'inferno/style-prop-object': 2,
		'inferno/jsx-boolean-value': 2,
		'inferno/jsx-closing-bracket-location': [2, 'props-aligned'],
		'inferno/jsx-curly-spacing': [2, 'never'],
		'inferno/jsx-equals-spacing': [2, 'never'],
		'inferno/jsx-first-prop-new-line': [2, 'multiline'],
		'inferno/jsx-handler-names': 2,
		'inferno/jsx-indent': [2, 'tab'],
		'inferno/jsx-indent-props': [2, 'tab'],
		'inferno/jsx-key': 2,
		'inferno/jsx-no-bind': 2,
		'inferno/jsx-no-comment-textnodes': 2,
		'inferno/jsx-no-duplicate-props': [2, {ignoreCase: true}],
		'inferno/jsx-no-target-blank': 2,
		'inferno/jsx-no-undef': 2,
		'inferno/jsx-pascal-case': 2,
		'inferno/jsx-space-before-closing': [2, 'never'],
		'inferno/jsx-uses-inferno': 2,
		'inferno/jsx-uses-vars': 2,
		'inferno/jsx-wrap-multilines': 2
	}
};
