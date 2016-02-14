'use strict';

module.exports = function(gulp, config) {
    var concat     = require('gulp-concat');
    var sourcemaps = require('gulp-sourcemaps');
    var uglify     = require('gulp-uglify');

    var configJs = config.js;

    /**
     * Concat JS files and add sourcemap.
     *
     * @see https://www.npmjs.com/package/gulp-concat
     * @see https://www.npmjs.com/package/gulp-sourcemaps
     */
    gulp.task('js:concat', 'Concat JS files and add sourcemap.', function () {
        gulp.src(configJs.src)
            .pipe(sourcemaps.init())
            .pipe(concat(configJs.concatFinalFileName))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(configJs.dest))
        ;
    });

    /**
     * Minify with UglifyJS the concatenate JS files.
     *
     * @see https://www.npmjs.com/package/gulp-uglify
     * @see https://github.com/mishoo/UglifyJS
     */
    gulp.task('js:min', 'Minify with UglifyJS the concatenate JS files.', function () {
        gulp.src(configJs.dest + configJs.concatFinalFileName)
            .pipe(uglify())
            .pipe(gulp.dest(configJs.dest))
        ;
    });
};
