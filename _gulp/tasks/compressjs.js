// ---
// COMPRESSJS TASK
// (puts files together, minifies and saves as 'scripts.min.js')
// ---

// plugins
var gulp = require('gulp'),
    uglyfly = require('gulp-uglyfly');

var config = require('../config').compressjs;

// task
gulp.task('compressjs', function() {
    gulp.src(config.src)
        .pipe(uglyfly())
        .pipe(gulp.dest(config.dest));
});
