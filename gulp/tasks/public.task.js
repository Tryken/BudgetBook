const gulp = require('gulp');

function copy() {
	return gulp.src('src/server/public/**/*').pipe(gulp.dest('dist/public/'));
}

const watch = () => {
	return gulp.watch(
		['src/server/public/**/*'],
		{ delay: 500 },
		gulp.series('public:copy')
	);
};

module.exports = {
	copy,
	watch,
};
