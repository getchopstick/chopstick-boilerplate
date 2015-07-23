// ---
// SCSS TASK
// ---

// plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    scsslint = require('gulp-scss-lint'),
    filesize = require('gulp-filesize'),
    browserSync = require('browser-sync'),
    sourcemaps  = require('gulp-sourcemaps');

// configfile
var config = require('../config').scss;

// Postcss processors
var processors = [
    autoprefixer(config.prefix)
];

// // task
gulp.task('scss', function () {
    gulp.src(config.src)
        .pipe(scsslint({
            'config': 'lint.yml'
        }))
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(filesize())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.jekyllCssDes))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.cssDest))
});
