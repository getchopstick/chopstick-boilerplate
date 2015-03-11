// ---
// IMAGEMIN
// ---

// plugins
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

// configfile
var config = require('../config').imagemin;

// task
gulp.task('imagemin', function () {
    return gulp.src(config.src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.dest));
});