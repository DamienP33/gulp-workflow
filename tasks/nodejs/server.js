'use strict';

module.exports = function(gulp, config) {
    var nodemon = require('gulp-nodemon');

    var configNode = config.node;

    /**
     * Node server task with NodeDemon.
     *
     * Watch js, css and html file change
     * @see https://www.npmjs.com/package/gulp-nodemon/
     */
    gulp.task('node:serve', 'Node server task with NodeDemon.', function () {
        nodemon({
            script: configNode.server,
            ext: 'js css html'
        });
    });
};
