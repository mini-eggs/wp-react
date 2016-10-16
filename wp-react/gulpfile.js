var gulp = require('gulp');
var ext_replace = require('gulp-ext-replace');

gulp.task('move-files', [], function() {

  console.log();
  console.log('Moving files to Wordpress root.');
  console.log();

  gulp.src([
      "build/**.*"
    ])
    .pipe(gulp.dest('../'));

  gulp.src([
      "build/index.html"
    ])
    .pipe(ext_replace('.php'))
    .pipe(gulp.dest('../'));

  gulp.src([
      "build/static/css/**.*"
    ])
    .pipe(gulp.dest('../static/css/'));

  gulp.src([
      "build/static/js/**.*"
    ])
    .pipe(gulp.dest('../static/js/'));
});

gulp.task('default', [], function() {
  console.log();
  console.log('No default gulp task.');
  console.log();
});