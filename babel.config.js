const plugins = [
	['@babel/plugin-proposal-decorators', { version: 'legacy' }],
	//['@babel/plugin-syntax-decorators', { decoratorsBeforeExport: true }],
	['@babel/plugin-transform-class-properties', { loose: true }],

	'@babel/plugin-transform-classes',
];

module.exports = {
	plugins,
	presets: [
		[
			'@babel/preset-env',
			{
				targets: '> 0.25%, not dead',
				useBuiltIns: 'entry',
				corejs: '3',
			},
		],
	],
	exclude: ['node_modules/(?!(lit|lit-html|lit-element))'],
};
