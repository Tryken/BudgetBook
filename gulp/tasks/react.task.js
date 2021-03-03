const gulp = require('gulp');
const webpack = require('webpack-stream');

const env = process.env.NODE_ENV || 'development';

/*const lint = () => {
	return gulp
		.src('src/server/main.ts')
		.pipe(
			tslint({
				formatter: 'prose',
			})
		)
		.pipe(
			tslint.report({
				emitError: false,
			})
		);
};*/

const build = () => {
	return gulp
		.src('./src/client/main.js')
		.pipe(
			webpack({
				mode: env,
				output: {
					filename: 'main.bundle.js',
				},
				module: {
					rules: [
						{
							test: /\.jsx?$/,
							exclude: /node_modules/,
							loader: 'babel-loader',
							query: {
								presets: ['@babel/preset-react'],
							},
						},
					],
				},
				resolve: {
					extensions: ['.js', '.jsx', '.es6'],
				},
			})
		)
		.pipe(gulp.dest('./dist/public/js/'));
};

const watch = () => {
	return gulp.watch(
		['src/client/**/*.*'],
		{
			delay: 500,
		},
		gulp.series('react:build')
	);
};

module.exports = {
	//lint,
	build,
	watch,
};
