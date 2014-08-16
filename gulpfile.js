var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


var lintCode = function () {
  return gulp.src(['./src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
};

gulp.task('watch', function() {
  var bundler = watchify(browserify('./src/index.js', watchify.args));

  // Optionally, you can apply transforms
  // and other configuration options on the
  // bundler just as you would with browserify
  bundler.transform('brfs');

  bundler.on('update', rebundle);

  function rebundle() {

    return bundler.bundle()
      // log errors if they happen
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./build'));
  }

  return rebundle();
});

gulp.task('lint', function () {
  return lintCode();
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);
