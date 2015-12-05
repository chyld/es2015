var gulp = require('gulp');
var shell = require('gulp-shell');

var paths = {
  js: ['./src/**/*.js']
}

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['flow', 'babel']);

gulp.task('flow', shell.task([
  'flow'
], {ignoreErrors: true}));

gulp.task('babel', shell.task([
  'babel src --out-dir app'
]));

gulp.task('watch', function () {
  gulp.watch(paths.js, ['build'])
});
