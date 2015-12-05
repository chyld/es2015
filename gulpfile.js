var gulp = require('gulp');
var shell = require('gulp-shell');

var paths = {
  js: ['./src/**/*.js']
}

gulp.task('flow', shell.task([
  'flow'
], {ignoreErrors: true}));

gulp.task('watch', function () {
  gulp.watch(paths.js, ['flow'])
});
