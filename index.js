'use strict';

var gutil = require('gulp-util');

var defaultWorkflow = {
    js: ['build', 'bump', 'quality-assurance', 'server'],
    angular: ['build', 'conf'],
    nodejs: ['server']
};

module.exports = function(gulp, config){
    gulp = require('gulp-help')(gulp);

    (function (config) {
        var workflow = config.workflow || defaultWorkflow;

        for(var module in workflow) {
            if (!workflow.hasOwnProperty(module) || !Array.isArray(workflow[module])) {
                gutil.log(gutil.colors.red('ERROR gulp-workflow :'), 'config.workflow.' + module, 'is not Array.');
                continue;
            }
            workflow[module].forEach(function (subModule) {
                try {
                    require('./tasks/' + module + '/' + subModule)(gulp, config);
                } catch (e) {
                    gutil.log(gutil.colors.red('ERROR gulp-workflow not loaded module :'), module + ':' + subModule, '.');
                    console.error(e);
                }
            });
        }
    })(config);
};
