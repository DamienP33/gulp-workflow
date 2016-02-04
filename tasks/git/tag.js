'use strict';

module.exports = function(gulp, config){
    var gitTag = require('gulp-tag-version');

    var configGit = config.git;

    /**
     * Tagging the repository with package.json.
     *
     * @see https://www.npmjs.com/package/gulp-tag-version
     */
    gulp.task('git-tag', 'Tagging the repository with package.json.', function() {
        return gulp
            .src(configGit.packageJson)
            .pipe(gitTag())
        ;
    });
};
