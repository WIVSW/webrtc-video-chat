const fromRoot = require('./helpers/from-root');

const { entry, optimization } = require('./common.config');
const { babel, sass } = require('./rules');
const {
	html,
	hmr,
	scriptExt,
	asyncChunkNames,
} = require('./plugins');

module.exports = {
	entry,
	output: {
		path: fromRoot('build'),
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[name].[hash].js',
	},
	optimization,
	module: {
		rules: [
			babel,
			sass,
		],
	},
	devServer: {
		host: '192.168.0.101', // Defaults to `localhost`
		port: 9000, // Defaults to 8080
	},
	plugins: [
		html,
		hmr,
		scriptExt,
		asyncChunkNames,
	],
};
