const path = require('path');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cwd = process.cwd();


module.exports = {
	entry: {
		index: path.resolve(cwd, 'src/ui/index.js'),
		vendor: ['react', 'react-dom'],
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
	devServer: {
		host: '192.168.0.101', // Defaults to `localhost`
		port: 9000, // Defaults to 8080
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/ui/index.html',
		}),
		new HotModuleReplacementPlugin(),
	],
};
