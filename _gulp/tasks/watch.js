// ---
// WATCH TASK
// ---

// plugins
var gulp = require('gulp');

// configs
var config = require('../config');

// task
gulp.task('watch', ['default','browsersync'], function () {
    gulp.watch(config.symbols.src, ['symbols']);
    gulp.watch(config.scss.src, ['scss']);
    gulp.watch(config.js.src, ['js--reload']);
    gulp.watch(config.watch.jekyllSource, ['jekyll--rebuild']);
});
