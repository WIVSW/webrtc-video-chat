const { entry, optimization } = require('./common.config');
const { babel } = require('./rules');
const { html, hmr } = require('./plugins');

module.exports = {
	entry,
	optimization,
	module: {
		rules: [
			babel,
		],
	},
	devServer: {
		host: '192.168.0.101', // Defaults to `localhost`
		port: 9000, // Defaults to 8080
	},
	plugins: [
		html,
		hmr,
	],
};
