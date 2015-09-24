// ---
// JS TASK &--reload
// ---

// plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat');

// configfile
var config = require('../config').js;

// tasks
gulp.task('js', function () {
    return gulp.src(config.src)
        .pipe(plumber())
        .pipe(concat(config.concatFilename))
        .pipe(gulp.dest(config.jekyllJsDest))
        .pipe(gulp.dest(config.jsDest));
});

gulp.task('js--reload', ['js', 'browsersyncReload']);
