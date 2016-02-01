/**
 * Created by damienp on 01/02/16.
 */
var gulp = require('gulp');
var bump = require('gulp-bump');

var configBump = require('../../config').js.bump;

/**
 * Bump any JSON file which supports semver versioning
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
gulp.task('patch', function() { return incrementPackage('patch'); });
gulp.task('feature', function() { return incrementPackage('minor'); });
gulp.task('release', function() { return incrementPackage('major'); });

function incrementPackage(importance) {
    return gulp.src(configBump.src)
        .pipe(bump({type: importance}))
        .pipe(gulp.dest(configBump.dest))
    ;
}
