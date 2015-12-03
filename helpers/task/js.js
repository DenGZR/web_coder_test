var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');

module.exports = function () {
    return gulp.src('dev/js/*.js')
        .pipe(concat('my_scripts.js'))
        .pipe(gulp.dest('prod/js/'))
        .pipe(connect.reload());
};