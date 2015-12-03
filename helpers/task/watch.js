var gulp = require('gulp');

module.exports = function(){
    gulp.watch('dev/index.html', ['html']);
    gulp.watch('dev/less/**/*.less', ['less']);
    gulp.watch('dev/libs_css/*.css', ['libs_css']);
    gulp.watch('dev/js/*.js', ['libs_js']);
    gulp.watch('dev/img/*', ['image']);
};

module.exports.dependencies = ['html', 'less', 'libs_css', 'libs_js', 'image'];