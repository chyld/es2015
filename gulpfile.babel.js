import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import express from 'gulp-express';

const paths = {
  js: ['./src/**/*.js'],
  destination: './app'
}

gulp.task('default', cb => {
  run('build', 'watch', cb);
});

gulp.task('build', cb => {
  run('clean', 'flow', 'babel', 'server', cb);
});

gulp.task('clean', cb => {
  rimraf(paths.destination, cb);
});

gulp.task('flow', shell.task([
  'flow'
], {ignoreErrors: true}));

gulp.task('babel', shell.task([
  'babel src --out-dir app'
]));

gulp.task('server', () => {
  express.run(['./app']);
});

gulp.task('watch', () => {
  return watch(paths.js, () => {
    gulp.start('build');
  });
});
