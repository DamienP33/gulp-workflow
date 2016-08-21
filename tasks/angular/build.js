'use strict';

module.exports = function(gulp, config) {
    var concat     = require('gulp-concat');
    var uglify     = require('gulp-uglify');
    var ngAnnotate = require('gulp-ng-annotate');
    var sourcemaps = require('gulp-sourcemaps');
    var rename     = require('gulp-rename');
    var replace    = require('gulp-replace');
    var htmlmin    = require('gulp-htmlmin');
    var templateCache = require('gulp-angular-templatecache');

    var configAngular = config.angular;

    /**
     * Build Angular project sources for development.
     * Detail:
     *  - concat JS files
     *  - add angular dependency injection annotations
     *  - minify JS files
     *  - add sourcemaps
     *
     * @see https://www.npmjs.com/package/gulp-concat
     * @see https://www.npmjs.com/package/gulp-sourcemaps
     * @see https://www.npmjs.com/package/gulp-ng-annotate
     * @see https://www.npmjs.com/package/gulp-uglify
     * @see https://github.com/mishoo/UglifyJS
     */
    gulp.task('angular:build:dev', 'Build Angular project sources for development.', function () {
        gulp.src(configAngular.src)
            .pipe(sourcemaps.init())
            .pipe(concat(configAngular.finalFileName))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(configAngular.dest))
        ;
    });

    /**
     * Build Angular project sources for production.
     * Detail:
     *  - concat JS files
     *  - add angular dependency injection annotations
     *  - minify JS files
     *
     * @see https://www.npmjs.com/package/gulp-concat
     * @see https://www.npmjs.com/package/gulp-ng-annotate
     * @see https://www.npmjs.com/package/gulp-uglify
     * @see https://github.com/mishoo/UglifyJS
     */
    gulp.task('angular:build:production', 'Build Angular project sources for production.', function () {
        gulp.src(configAngular.src)
            .pipe(concat(configAngular.finalFileName))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest(configAngular.dest))
        ;
    });

    /**
     * Build Angular project sources for production with versionning.
     * Detail:
     *  - concat JS files
     *  - add angular dependency injection annotations
     *  - minify JS files
     *
     * @see https://www.npmjs.com/package/gulp-concat
     * @see https://www.npmjs.com/package/gulp-ng-annotate
     * @see https://www.npmjs.com/package/gulp-uglify
     * @see https://github.com/mishoo/UglifyJS
     */
    gulp.task('angular:build:production-version', 'Build Angular project sources for production with versionning.', 
        function () {
        var timestamp = new  Date().getTime();
        console.log(timestamp);

        gulp.src(config.js.src)
            .pipe(concat(configAngular.finalFileName))
            .pipe(gulp.dest(config.js.dest))
            .pipe(concat('app.js?v=' + timestamp))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest(configAngular.dest))
        ;

        gulp.src(configAngular.indexHtml)
            .pipe(replace(/@version@/, '%3Fv=' + timestamp))
            .pipe(rename(configAngular.finalIndexHtml))
            .pipe(gulp.dest('./app'))
        ;
    });

    /**
     * Minify, concatenates and registers AngularJS templates in the $templateCache.
     * Detail:
     *  - minify html
     *  - build template cache
     * @see https://docs.angularjs.org/api/ng/service/$templateCache
     * @see https://www.npmjs.com/package/gulp-htmlmin
     * @see https://www.npmjs.com/package/gulp-angular-templatecache
     */
    gulp.task('angular:build:html', 'Build Angular $templateCache.', function() {
        gulp.src(configAngular.html.src)
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(templateCache(configAngular.html.finalFileName, {
                module: configAngular.html.moduleName,
                root: configAngular.html.moduleRoot
            }))
            .pipe(gulp.dest(configAngular.dest))
        ;
    });
};
