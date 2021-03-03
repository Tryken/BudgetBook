const path = require('path');

module.exports = {
	entry: './main.js',
	output: {
		path: path.join(__dirname, '/dist/public/js'),
		filename: 'main.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
				},
			},
		],
	},
};
