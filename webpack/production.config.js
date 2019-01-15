const fromRoot = require('./helpers/from-root');

const { entry, optimization } = require('./common.config');
const { babel, sass } = require('./rules');
const {
	clean,
	html,
	scriptExt,
	asyncChunkNames,
} = require('./plugins');

module.exports = {
	entry,
	output: {
		path: fromRoot('build'),
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: 'js/[name].[chunkhash].js',
	},
	optimization,
	module: {
		rules: [
			babel,
			sass,
		],
	},
	plugins: [
		clean,
		html,
		scriptExt,
		asyncChunkNames,
	],
};
