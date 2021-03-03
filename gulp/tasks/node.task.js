const gulp = require('gulp');
const ts = require('gulp-typescript');
const tslint = require('gulp-tslint');

const tsProject = ts.createProject('./src/server/tsconfig.json');

const lint = () => {
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
};

const build = () => {
	return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist/src'));
};

const watch = () => {
	return gulp.watch(
		['src/server/**/*.ts'],
		{
			delay: 500,
		},
		gulp.series('node:lint', 'node:build')
	);
};

module.exports = {
	lint,
	build,
	watch,
};
