// ---
// DEFAULT TASK (when calling gulp)
// ---

// plugins
var gulp = require('gulp'),
    rs = require('run-sequence');

// task
gulp.task('default', [
    'dependencies',
    'test',
    'scss',
    'js',
    'jekyll--build'
]);
