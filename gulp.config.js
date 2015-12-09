module.exports = function() {
	var source = './source/';
	var sourceApp = source + 'app/';
	var temp = './.tmp/';
	var config = {

		// all js except the vendor js
		allJSToLint: [
			'./*.js',
			'./source/**/*.js',
			'!./source/vendor/**/*.js'
		],
		build: './build/',
		data: source + 'data/**/*.*',
		htmltemplates: sourceApp + '**/*.html',
		images: source + 'images/**/*.*',
		index: source + 'index.html',
		temp: temp,

		// template Cache
		templateCache: {
			file: 'templates.js',
			options: {
				module: 'app.core',
				root: 'app/',
				standAlone: false
			}
		}
	};
	return config;
};
