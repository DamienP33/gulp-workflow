'use strict';

module.exports = function(gulp, config) {
    var ngConfig     = require('gulp-ng-config');

    var configAngular = config.angular;

    /**
     * AngularJS configuration generator for a module of constants
     *
     * @see https://www.npmjs.com/package/gulp-ng-config
     */
    gulp.task('angular:conf:production', 'AngularJS configuration generator for a module of constants.', function () {
        return configGenerator('production');
    });
    gulp.task('angular:conf:staging', 'AngularJS configuration generator for a module of constants.', function () {
        return configGenerator('staging');
    });
    gulp.task('angular:conf:local', 'AngularJS configuration generator for a module of constants.', function () {
        return configGenerator('local');
    });

    function configGenerator(environment) {
        return gulp.src(configAngular.configSrc)
            .pipe(ngConfig(configAngular.moduleName, {
                wrap: true,
                environment: environment
            }))
            .pipe(gulp.dest(configAngular.dest))
        ;
    }
};
