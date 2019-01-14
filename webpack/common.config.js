const fromRoot = require('./helpers/from-root');

module.exports = {
	entry: {
		index: fromRoot('src/ui/index.js'),
		vendor: ['react', 'react-dom'],
	},
	optimization: {
		minimize: process.env.NODE_ENV !== 'development',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
};
