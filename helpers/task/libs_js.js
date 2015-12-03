var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var libs = require('../config').libs;

module.exports = function () {
    return gulp.src('dev/libs/**')
        //.pipe(concat('vendor.js'))
        .pipe(gulp.dest('prod/libs/'))
        .pipe(connect.reload());
};