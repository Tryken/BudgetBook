const gulp = require('gulp');

require('./registerTasks')();

gulp.task('lint', gulp.series('node:lint'));
gulp.task(
	'build',
	gulp.series('dist:clean', 'public:copy', 'react:build', 'lint', 'node:build')
);
gulp.task(
	'watch',
	gulp.parallel('node:watch', 'public:watch', 'react:watch', 'nodemon:watch')
);

gulp.task('development', gulp.series('build', 'watch'));
