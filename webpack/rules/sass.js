const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
	autoprefixer({
		browsers: ['ie >= 8', 'last 4 version'],
	}),
];

if (process.env.NODE_ENV !== 'development') {
	plugins.push(cssnano({
		discardComments: {
			removeAll: true,
		},
	}));
}

module.exports = {
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: [
			{ loader: 'css-loader' },
			{
				loader: 'postcss-loader',
				options: {
					plugins,
				},
			},
			{ loader: 'sass-loader' },
		],
	}),
};
