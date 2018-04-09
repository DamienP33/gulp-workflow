// /**
//  * Created by damienp on 21/08/16.
//  */
// 'use strict';
//
// module.exports = function(gulp, config){
//     // var sass       = require('gulp-sass');
//     var minifyCss  = require('gulp-minify-css');
//     var rename     = require('gulp-rename');
//     var sourcemaps = require('gulp-sourcemaps');
//
//     var configCss = config.css;
//
//     gulp.task('sass:build', function() {
//         gulp.src(configCss.sass.src)
//             .pipe(sourcemaps.init())
//             .pipe(sass({errLogToConsole: true}))
//             .pipe(sass().on('error', sass.logError))
//             .pipe(sourcemaps.write())
//             .pipe(gulp.dest(configCss.sass.dest))
//         ;
//     });
//
//     gulp.task('sass:build:production', function() {
//         gulp.src(configCss.sass.src)
//             .pipe(sass({errLogToConsole: true}))
//             .pipe(minifyCss({keepSpecialComments: 0}))
//             .pipe(rename({ extname: '.min.css' }))
//             .pipe(gulp.dest(configCss.sass.dest))
//         ;
//     });
// };
