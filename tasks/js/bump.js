'use strict';

module.exports = function(gulp, config) {
    var bump = require('gulp-bump');

    var configBump = config.js.bump;

    /**
     * Bump any JSON file which supports semver versioning.
     *
     * @see http://semver.org/
     * @see https://www.npmjs.com/package/gulp-bump
     *
     * @description You can use the commands
     *
     *     gulp patch     # makes v0.1.0 → v0.1.1
     *     gulp feature   # makes v0.1.1 → v0.2.0
     *     gulp release   # makes v0.2.1 → v1.0.0
     */
    gulp.task('js:patch', 'Bump any JSON file which supports semver versioning.', function () {
        return incrementPackage('patch');
    });
    gulp.task('js:feature', 'Bump any JSON file which supports semver versioning.', function () {
        return incrementPackage('minor');
    });
    gulp.task('js:release', 'Bump any JSON file which supports semver versioning.', function () {
        return incrementPackage('major');
    });

    function incrementPackage(importance) {
        return gulp.src(configBump.src)
            .pipe(bump({type: importance}))
            .pipe(gulp.dest(configBump.dest))
        ;
    }
};
