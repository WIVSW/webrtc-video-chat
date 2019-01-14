const fromRoot = require('./helpers/from-root');

const { entry, optimization } = require('./common.config');
const { babel } = require('./rules');
const { clean, html, scriptExt } = require('./plugins');

module.exports = {
	entry,
	output: {
		path: fromRoot('build'),
		filename: 'js/[name].[chunkhash].js',
	},
	optimization,
	module: {
		rules: [
			babel,
		],
	},
	plugins: [
		clean,
		html,
		scriptExt,
	],
};
