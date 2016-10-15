// ---
// SYMBOLS TASK
// ---

// plugins
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    svgsymbols = require('gulp-svg-symbols'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio');

// configfile
var config = require('../config').symbols;

// task
gulp.task('symbols', function () {
    return gulp
        .src(config.src)
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgmin())
        .pipe(rename({prefix: config.prefix}))
        .pipe(svgsymbols({
            title: '%f icon',
            svgClassname: config.class,
            templates: ['default-svg']
        }))
        .pipe(gulp.dest(config.dest));
});
