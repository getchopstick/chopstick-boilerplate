// ---
// SCSS TASK
// ---

// plugins
var gulp = require('gulp');
    plumber = require('gulp-plumber'),
    gulpFilter = require('gulp-filter'),
    nodeSass = require('gulp-sass'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    filesize = require('gulp-filesize'),
    browserSync = require('browser-sync'),
    cmq = require('gulp-combine-media-queries'),
    sourcemaps  = require('gulp-sourcemaps');

// configfile
var config = require('../config').scss,
    cmqConfig = require('../config').cmq,
    nodeSassConfig = require('../config').nodeSass;

// task
gulp.task('scss', function () {
    var filter = gulpFilter(['!*.map', '*.css']);

    var task = gulp.src(config.src)

        .pipe(plumber())

        // run nodeSass with sourcemaps
        .pipe(sourcemaps.init())
        .pipe(nodeSass(config.nodeSass))
        .pipe(sourcemaps.write())

        // filter out the sourcemap
        .pipe(filter)
        .pipe(filesize())
        .pipe(prefix(config.prefix))
        .pipe(cmq(cmqConfig))

        // write
        .pipe(gulp.dest(config.jekyllCssDes))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.cssDest));

        //write the sourcemap
        filter.restore({end: true})

        .pipe(gulp.dest(config.jekyllCssDes))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.cssDest))

});