// ---
// ALL TASKS TO DO WITH JEKYLL
// ---

// plugins
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cp = require('child_process');

// configfile
var config = require('../config').jekyll;

// tasks
gulp.task('jekyll--build', function (done) {
    browserSync.notify(config.buildMessage);
    return cp
        .spawn('bundle', ['exec', 'jekyll', 'build', '--config=_config.yml', '--incremental'], {
            stdio: 'inherit'
        })
        .on('close', done);
});

gulp.task('jekyll--rebuild', ['jekyll--build'], function () {
    browserSync.reload();
});
