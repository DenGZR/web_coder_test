var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var minifyCss = require('gulp-minify-css');

module.exports = function () {
    return gulp.src('dev/less/main.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('prod/css'))
        .pipe(connect.reload());
};