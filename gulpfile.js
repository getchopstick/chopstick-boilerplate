// ---
// GULPFILE INDEX
// ---
//
// 1. SETTINGS
// 2. PLUGINS
// 3. STYLESHEETS
// 4. JEKYLL & BROWSER SYNC
// 5. WORKFLOW
//


// ---
// 1. SETTINGS
// ---

var settings = {
	baseDir : './_site', // Directory served by browsersync (= Jekyll build folder)
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

// STYLESHEETS
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cmq = require('gulp-combine-media-queries');

// MESSAGES
var messages = {
	jekyllBuild: '<span style="color: grey">Building</span> jekyll'
};


// ---
// 3. STYLESHEETS
// ---

gulp.task('scss', function () {
	return gulp.src(source.scss)
		.pipe(plumber())
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(prefix(settings.prefix))
		.pipe(cmq({
			log: true
		}))
		.pipe(filesize())
		.pipe(gulp.dest(target.jekyllCSS))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(target.css));
});


// ---
// 4. JEKYLL & BROWSER SYNC
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
	browserSync.init(null, {
		server: {
			baseDir: settings.baseDir,
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
	});
});


// ---
// 5. WORKFLOW
// ---

gulp.task('default', [
	'scss',
	'jekyll--build'
]);

gulp.task('watch', [
		'browsersync',
	], function(){
		watch({glob: source.scss}, function(){gulp.start('scss');});
		watch({glob: source.jekyll}, function(){gulp.start('jekyll--rebuild');});
});
