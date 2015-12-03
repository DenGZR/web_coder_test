var gulp = require('gulp');

require('gulp-task-loader')('helpers/task');

gulp.task('default', ['connect', 'html', 'less', 'libs_css', 'libs_js', 'js', 'image', 'watch']);