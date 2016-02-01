/**
 * Created by damienp on 01/02/16.
 */
var gulp = require('gulp');
var gitTag = require('gulp-tag-version');

var configGit = require('../../config').git;

/**
 * Tagging the repository with package.json.
 *
 * @see https://www.npmjs.com/package/gulp-tag-version
 */
gulp.task('git-tag', function() {
    return gulp
        .src(configGit.packageJson)
        .pipe(gitTag())
    ;
});
