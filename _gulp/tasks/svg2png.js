// ---
// SVG2PNG
// ---

// plugins
var gulp = require('gulp'),
    svg2png = require('gulp-svg2png');

// configfile
var config = require('../config').svg2png;

// task
gulp.task('svg2png', function () {
    gulp.src(config.src)
        .pipe(svg2png(config.settings))
        .pipe(gulp.dest(config.dest));
});