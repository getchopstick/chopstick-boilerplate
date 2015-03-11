// ---
// SCSS TASK
// ---

// plugins
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gulpFilter = require('gulp-filter');
var nodeSass = require('gulp-sass');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var filesize = require('gulp-filesize');
var browserSync = require('browser-sync');
var cmq = require('gulp-combine-media-queries');
var sourcemaps  = require('gulp-sourcemaps');

// configfile
var config = require('../config').scss;
var cmqConfig = require('../config').cmq;
var nodeSassConfig = require('../config').nodeSass;



// task
gulp.task('scss', function () {
	var filter = gulpFilter(['!*.map', '*.css']);

	var task = gulp.src(config.src)

	//return gulp.src(config.src)
		.pipe(plumber())

		// run nodeSass with sourcemaps
		.pipe(sourcemaps.init())
		.pipe(nodeSass(config.nodeSass))
		.pipe(sourcemaps.write())

		// filter out the sourcemap
		.pipe(filter)
		.pipe(filesize())
		//.pipe(prefix(config.prefix))
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