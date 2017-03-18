var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('../config').webpack;
var webpackConfig = require('../webpack.config');

gulp.task('webpack', function () {
  return gulp.src(config.src)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(config.jekyllDest))
    .pipe(gulp.dest(config.dest));
});

gulp.task('js--reload', ['webpack', 'browsersyncReload']);
