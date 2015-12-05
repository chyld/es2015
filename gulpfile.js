var gulp = require('gulp');
var shell = require('gulp-shell');
var rimraf = require('rimraf');
var run = require('run-sequence');

var paths = {
  js: ['./src/**/*.js'],
  destination: './app'
}

gulp.task('default', ['build', 'watch']);

gulp.task('build', function(cb){
  run('clean', 'flow', 'babel', cb);
});

gulp.task('clean', function(cb){
  rimraf(paths.destination, cb);
});

gulp.task('flow', shell.task([
  'flow'
], {ignoreErrors: true}));

gulp.task('babel', shell.task([
  'babel src --out-dir app'
]));

gulp.task('watch', function(){
  gulp.watch(paths.js, ['build'])
});
