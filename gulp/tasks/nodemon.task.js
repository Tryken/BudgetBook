const gulpNodemon = require('gulp-nodemon');

const watch = (done) => {
	return gulpNodemon({
		script: 'dist/src/main.js',
		watch: 'dist',
		ignore: 'dist/public/*',
		ext: 'js html css',
		done: done,
	});
};

module.exports = {
	watch,
};
