// ---
// SCSS TASK
// ---

// plugins
var gulp = require('gulp');
    scsslint = require('gulp-scss-lint');

// configfile
var config = require('../config').scss;

// // task
gulp.task('test', function () {
    gulp.src(config.src)
        .pipe(scsslint({
            'config': 'lint.yml'
        }))
});
