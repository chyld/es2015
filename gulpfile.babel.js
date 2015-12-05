import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';

const paths = {
  js: ['./src/**/*.js'],
  destination: './app'
}

gulp.task('default', cb => {
  run('server', 'build', 'watch', cb);
});

gulp.task('build', cb => {
  run('clean', 'flow', 'babel', 'restart', cb);
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

let express;

gulp.task('server', () => {
  express = server.new(paths.destination);
});

gulp.task('restart', () => {
  express.start.bind(express)();
});

gulp.task('watch', () => {
  return watch(paths.js, () => {
    gulp.start('build');
  });
});
