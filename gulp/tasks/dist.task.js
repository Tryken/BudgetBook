const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const fs = require('fs');

const dir = './dist';

const clean = () => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	return gulp.src('./dist/', { read: false }).pipe(gulpClean());
};

module.exports = {
	clean,
};
