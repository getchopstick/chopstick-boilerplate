// ---
// WATCH TASK
// ---

// plugins
var gulp = require('gulp'),
    watch = require('gulp-watch');

//configs
var config = require('../config');

// task
gulp.task('watch', ['browsersync'],
    function(){
        watch(config.scss.src, function(){gulp.start('scss');});
        watch(config.js.src, function(){gulp.start('js--reload');});
        watch(config.watch.jekyllSource, function(){gulp.start('jekyll--rebuild');});
});
