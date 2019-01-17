const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = new MiniCssExtractPlugin({
	// Options similar to the same options in webpackOptions.output
	// both options are optional
	chunkFilename: 'css/[name].[hash].css',
});
