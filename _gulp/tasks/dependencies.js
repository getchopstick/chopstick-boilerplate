// ---
// Copy Dependencies
// ---

// plugins
var gulp = require('gulp'),
    gnf = require('gulp-npm-files'),
    del = require('del');

// configfile
var config = require('../config').dependencies;

// tasks
gulp.task('copy-npm-dependencies', function () {
    // Copy dependencies from `node_modules` to $dest
    // Only copies dependencies, not devDependencies
    // See gulp-npm-files for documentation
    return gulp.src(gnf(), {base:'./'})
        .pipe(gulp.dest(config.dest));
});

gulp.task('copy-vendor-dependencies', ['copy-npm-dependencies'], function () {
    // Move `$dest/node_modules/**/*` to `$dest/**/*`
    return gulp.src(config.dest + 'node_modules/**/*')
        .pipe(gulp.dest(config.dest));
});

gulp.task('clean-node-modules', ['copy-vendor-dependencies'], function () {
    // Delete `$dest/node_modules`
    return del([config.dest + 'node_modules/']);
});

gulp.task('dependencies', [
    'copy-npm-dependencies',
    'copy-vendor-dependencies',
    'clean-node-modules'
]);
