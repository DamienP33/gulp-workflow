'use strict';

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jscsStylish = require('gulp-jscs-stylish');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');

var configJs = require('../../config').js;

gulp.task('qa-js', ['jscs', 'jshint']);

/**
 * Check JavaScript code style with jscs.
 *
 * @see https://www.npmjs.com/package/gulp-jscs
 * @see http://jscs.info/
 */
gulp.task('jscs', function() {
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
gulp.task('jshint', function() {
    gulp.src(configJs.src)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(jshintStylish))
        .pipe(jshint.reporter('fail'))
    ;
});
