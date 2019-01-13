const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cwd = process.cwd();

module.exports = {
	entry: {
		index: path.resolve(cwd, 'src/ui/index.js'),
		vendor: ['react', 'react-dom'],
	},
	output: {
		path: path.resolve(cwd, 'build'),
		filename: 'js/[name].[chunkhash].js',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(
			path.resolve(cwd, 'build/*'),
			{
				root: cwd,
			},
		),
		new HtmlWebpackPlugin({
			template: path.resolve(cwd, 'src/ui/index.html'),
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer',
		}),
	],
};
