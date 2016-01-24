'use strict';

var gulp = require('gulp');
var server = require('gulp-server-livereload');

var config = require('../../config').js;

/**
 * Execute the tasks when JS files change.
 * Here, the execute concat JS task.
 *
 * @see https://github.com/gulpjs/gulp
 * @see tasks/js/build.js
 */
gulp.task('watch-js', ['concat-js'], function () {
    gulp.watch(config.src, ['concat-js']);
});

/**
 * Local webserver with livereload enabled via socket.io.
 * Execute watch-js task with livereload.
 *
 * Default URI: http://localhost:8000
 *
 * @see https://www.npmjs.com/package/gulp-server-livereload
 */
gulp.task('serve-js', ['watch-js'], function() {
    gulp.src(config.server.rootDir)
        .pipe(server({
            defaultFile: config.server.indexFile,
            livereload: true,
            open: false
        }))
    ;
});
