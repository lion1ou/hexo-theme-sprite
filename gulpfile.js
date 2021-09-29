'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

function watch() {
  gulp.watch('./source/_less/*.less', css);
}

function css(cb) {
  return gulp
    .src('./source/_less/main.less')
    .pipe(less({ plugins: [autoprefix] }))
    .pipe(gulp.dest('./source/css/', { overwrite: true }));
}

function js(cb) {
  console.log('js...');
  cb();
}

exports.default = gulp.series(css, js, watch);
exports.build = gulp.series(css, js);
