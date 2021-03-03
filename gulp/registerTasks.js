const gulp = require('gulp');
const requireDir = require('require-dir');

module.exports = () => {
	const files = requireDir('./tasks');
	for (const [fileName, tasks] of Object.entries(files)) {
		for (const [taskName, task] of Object.entries(tasks)) {
			gulp.task(`${fileName.split('.')[0]}:${taskName}`, task);
		}
	}
};
