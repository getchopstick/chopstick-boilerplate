// ---
// TEST TASK
// ---

// plugins
var gulp = require('gulp');
    scsslint = require('gulp-scss-lint');

// configfile
var config = require('../config').lint;

// task
gulp.task('test', function () {
    gulp.src(config.src)
        .pipe(scsslint(config.settings))
});
