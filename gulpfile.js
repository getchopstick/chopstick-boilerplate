// ---
// GULPFILE INDEX
// ---
//
// 1. SETTINGS
// 2. PLUGINS
// 3. STYLESHEETS
// 4. JAVASCRIPT
// 5. JEKYLL & BROWSER SYNC
// 6. WORKFLOW
//


// ---
// 1. SETTINGS
// ---

var settings = {
	browserSync :  {
		server: {
			baseDir: './_site',
			reloadDelay: 2000,
			debounce: 200,
			notify: true,
			ghostMode: {
				clicks: true,
				location: true,
				forms: true,
				scroll: false
			}
		}
	},
	nodeSass : {
		errLogToConsole: true
	},
	cmq : {
		log: true
	},
	prefix : [ // Autoprefixer settings
		'last 2 version',
		'> 1%',
		'ie 8',
		'ie 9',
		'ios 6',
		'android 4'
	]
};

var source = {
	scss : 'scss/**/*.scss', // SCSS source files
	js : [
		'js/theme.js',
		'js/_components/*.js'
	],
	jekyll : [ // Files that trigger a Jekyll rebuild
		'img/*.png',
		'img/*.jpg',
		'img/*.svg',
		'js/*.js',
		'_includes/**/*.html',
		'_layouts/*.html',
		'_posts/*.md',
		'_data/*.yml',
		'*.html'
	]
};

var target = {
	css : 'css/', // CSS target
	jekyllCSS : '_site/css/', // Jekyll CSS target for stylesheet injection
	js : 'js/',
	jekyllJS : '_site/js/',
	site : '_site/' // Jekyll build folder
};


// ---
// 2. PLUGINS
// ---

// BASICS
var gulp = require('gulp');
var cp = require('child_process');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var filesize = require('gulp-filesize');
var browserSync = require('browser-sync');
var gulpFilter = require('gulp-filter');
var sourcemaps = require('gulp-sourcemaps');

// STYLESHEETS
var nodeSass = require('gulp-sass'); // Node sass > faster, less features
var cmq = require('gulp-combine-media-queries');
var prefix = require('gulp-autoprefixer');

// JAVASCRIPT
var concat = require('gulp-concat');

// MESSAGES
var messages = {
	jekyllBuild: '<span style="color: grey">Building</span> jekyll'
};


// ---
// 3. STYLESHEETS
// ---

gulp.task('scss', function () {
	var filter = gulpFilter(['!*.map', '*.css']);

	var task = gulp.src(source.scss)
		.pipe(plumber())

		// run nodeSass with sourcemaps
		.pipe(sourcemaps.init())
		.pipe(nodeSass(settings.nodeSass))
		.pipe(sourcemaps.write('../css'))

		// filter out the sourcemap
		.pipe(filter)
		.pipe(filesize())
		.pipe(prefix(settings.prefix))
		.pipe(cmq(settings.cmq))

		// write
		.pipe(gulp.dest(target.jekyllCSS))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(target.css))

	// write the sourcemap
	filter.restore({end: true})
		.pipe(gulp.dest(target.jekyllCSS))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(target.css))

	return task;
});


// ---
// 4. JAVASCRIPT
// ---

gulp.task('js', function () {
	return gulp.src(source.js)
		.pipe(plumber())
		.pipe(concat('theme.concat.js'))
		.pipe(gulp.dest(target.jekyllJS))
		.pipe(gulp.dest(target.js));
});

gulp.task('js--reload', ['js'], function () {
  browserSync.reload();
});


// ---
// 5. JEKYLL & BROWSER SYNC
// ---

// @TODO: how do we keep this task running on errors? .pipe(plumber()) does not work on a return.
gulp.task('jekyll--build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp
		.spawn('jekyll', ['build'], {
			stdio: 'inherit'
		})
		.on('close', done);
});

gulp.task('jekyll--rebuild', ['jekyll--build'], function () {
	browserSync.reload();
});

gulp.task('browsersync', function() {
	browserSync.init(null, settings.browserSync);
});


// ---
// 6. WORKFLOW
// ---

gulp.task('default', [
	'scss',
	'js',
	'jekyll--build'
]);

gulp.task('watch', [
		'browsersync',
	], function(){
		watch({glob: source.scss}, function(){gulp.start('scss');});
		watch({glob: source.js}, function(){gulp.start('js--reload');});
		watch({glob: source.jekyll}, function(){gulp.start('jekyll--rebuild');});
});
