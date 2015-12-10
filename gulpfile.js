var gulp = require('gulp');
var config = require('./gulp.config')();
var del = require('del');

var $ = require('gulp-load-plugins')({lazy: true});

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

/**
 * Lint source code
 */
gulp.task('jshint', function() {
	log('Analyzing source with JSHint');

	return gulp
		.src(config.allJSToLint)
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('jscs', function() {
	log('Analyzing source with JSCS and JSHint');

	return gulp
		.src(config.allJSToLint)
		.pipe($.jscs())
		.pipe($.jscsStylish());
});

/**
 * Remove all images from the build folder
 */
gulp.task('clean-images', function() {
	return clean(config.build + 'images/**/*.*');
});

/**
 * Copy images to build folder
 * @return {Stream}
 */
gulp.task('images', ['clean-images'], function() {
	log('Copying images');

	return gulp
		.src(config.images)
		.pipe(gulp.dest(config.build + 'images'));
});

/**
 * Remove all data files from the build folder
 */
gulp.task('clean-data', function() {
	return clean(config.build + 'data/**/*.*');
});

/**
 * Copy data files to build folder
 * @return {Stream}
 */
gulp.task('data', ['clean-data'], function() {
	log('Copying data files');

	return gulp
		.src(config.data)
		.pipe($.plumber())
		.pipe($.jsonmin())
		.pipe(gulp.dest(config.build + 'data'));
});

/**
 * Remove all js and html from the build and temp folders
 */
gulp.task('clean-code', function() {
	var files = [].concat(
		config.temp + '**/*.js',
		config.build + 'js/**/*.js',
		config.build + '**/*.html'
	);
	return clean(files);
});

/**
 * Create $templateCache from the html templates
 * @return {Stream}
 */
gulp.task('templatecache', ['clean-code'], function() {
	log('Creating an AngularJS $templateCache');

	return gulp
		.src(config.htmltemplates)
		.pipe($.minifyHtml({empty: true}))
		.pipe($.angularTemplatecache(
			config.templateCache.file,
			config.templateCache.options
		))
		.pipe(gulp.dest(config.temp));
});

/**
 * Optimize all files, move to a build folder,
 * and inject them into the new index.html
 * @return {Stream}
 */
gulp.task('optimize', ['templatecache','images','data'], function() {
	log('Optimizing the js, css, and html');

	var templateCache = config.temp + config.templateCache.file;

	return gulp
		.src(config.index)
		.pipe($.plumber())
		.pipe($.inject(gulp.src(templateCache, {read: false}, {ignorePath: 'source'}), {
			starttag: '<!-- inject:templates:js -->'}))
		.pipe($.useref({searchPath: ['', '.tmp', 'source']}))
		.pipe($.if('*.js', $.uglify()))
		.pipe($.if('*.css', $.csso()))
		.pipe($.if('index.html', $.minifyHtml({empty: true})))
		.pipe(gulp.dest(config.build));
});

/**
 * Serve development or build version of the app
 */
gulp.task('serve-dev', function () {
	log('Serving development...');
	$.connect.server({
		root: 'source/',
		port: 8888
	});
});

gulp.task('serve-build', ['optimize'], function () {
	log('Serving release build...');
	$.connect.server({
		root: 'build/',
		port: 9999
	});
});

////////////////////////////////////////////////////////////////

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}

/**
 * Delete all files in a given path
 * @param  {Array}	 path - array of paths to delete
 */
function clean(path) {
	log('Cleaning: ' + $.util.colors.blue(path));
	return del(path);
}
