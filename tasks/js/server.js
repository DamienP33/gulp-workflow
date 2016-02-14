'use strict';

module.exports = function(gulp, config) {
    var server = require('gulp-server-livereload');

    var configJs = config.js;

    /**
     * Execute the tasks when JS files change.
     * Here, the execute concat JS task.
     *
     * @see https://github.com/gulpjs/gulp
     * @see tasks/js/build.js
     */
    gulp.task('js:watch', 'Execute the tasks when JS files change.', ['concat-js'], function () {
        gulp.watch(configJs.src, ['concat-js']);
    });

    /**
     * Local webserver with livereload enabled via socket.io.
     * Execute watch-js task with livereload.
     *
     * Default URI: http://localhost:8000
     *
     * @see https://www.npmjs.com/package/gulp-server-livereload
     */
    gulp.task('js:serve', 'Local webserver with livereload enabled via socket.io.', ['watch-js'], function () {
        gulp.src(configJs.server.rootDir)
            .pipe(server({
                defaultFile: configJs.server.indexFile,
                livereload: true,
                open: false
            }))
        ;
    });
};
