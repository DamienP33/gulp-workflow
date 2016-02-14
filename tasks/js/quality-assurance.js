'use strict';

module.exports = function(gulp, config) {
    var jscs          = require('gulp-jscs');
    var jscsStylish   = require('gulp-jscs-stylish');
    var jshint        = require('gulp-jshint');
    var jshintStylish = require('jshint-stylish');

    var configJs = config.js;

    gulp.task('js:qa', 'JSCS + JSHint', ['jscs', 'jshint']);

    /**
     * Check JavaScript code style with jscs.
     *
     * @see https://www.npmjs.com/package/gulp-jscs
     * @see http://jscs.info/
     */
    gulp.task('js:cs', 'Check JavaScript code style with jscs.', function () {
        gulp.src(configJs.src)
            .pipe(jscs())
            .pipe(jscsStylish())
        ;
    });

    /**
     * Detect errors and potential problems in your JavaScript code with jshint.
     *
     * @see https://www.npmjs.com/package/gulp-jshint
     * @see http://jshint.com/docs/
     */
    gulp.task('js:hint', 'Detect errors and potential problems in your JavaScript code with jshint.', function () {
        gulp.src(configJs.src)
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter(jshintStylish))
            .pipe(jshint.reporter('fail'))
        ;
    });
};
