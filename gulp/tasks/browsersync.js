// ---
// BROWSERSYNC
// ---

// plugins
var gulp = require('gulp'),
    browserSync = require('browser-sync');

// configfile
var config = require('../config').browsersync;


// tasks
gulp.task('browsersync', function() {
    browserSync.init(config);
});

gulp.task('browsersyncReload', function() {
    browserSync.reload();
});