// ---
// SCSS TASK
// ---

// plugins
var gulp = require('gulp');
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    filesize = require('gulp-filesize'),
    browserSync = require('browser-sync'),
    sourcemaps  = require('gulp-sourcemaps');

// configfile
var config = require('../config').scss;

// // task
gulp.task('scss', function () {
    return sass(config.screen, config.settings)
        .on('error', function (err) {
          console.error('Error', err.message);
        })
    .pipe(prefix(config.prefix))
    .pipe(filesize())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.jekyllCssDes))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(config.cssDest))
});
