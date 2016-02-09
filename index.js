/**
 * Created by damienp on 03/02/16.
 */
'use strict';

module.exports = function(gulp, config){
    gulp = require('gulp-help')(gulp);

    require('./tasks/js/quality-assurance')(gulp, config);
    require('./tasks/js/build')(gulp, config);
    require('./tasks/js/bump')(gulp, config);
    require('./tasks/js/server')(gulp, config);

    require('./tasks/nodejs/server')(gulp, config);

    require('./tasks/angular/build')(gulp, config);
    require('./tasks/angular/conf')(gulp, config);

    require('./tasks/git/tag')(gulp, config);
};
