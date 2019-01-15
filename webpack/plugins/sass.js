const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new ExtractTextPlugin('css/[name].[chunkhash].css');
