'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var config = require('../config').node;

/**
 * Node server task with NodeDemon.
 *
 * Watch js, css and html file change
 * @see https://www.npmjs.com/package/gulp-nodemon/
 */
gulp.task('serve-node', function () {
    nodemon({
        script: config.server,
        ext: 'js css html'
    });
});
