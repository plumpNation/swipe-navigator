var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var watchify = require('gulp-watchify');
var bundlePaths = {
    src: [
        'src/index.js'
    ],
    dest:'build/'
}

var lintCode = function () {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
};

// Hack to enable configurable watchify watching
var watching = false;
gulp.task('enable-watch-mode', function() {
  watching = true
});

gulp.task('lint', function () {
  return lintCode();
});

// Browserify and copy js files
gulp.task('browserify', ['lint'], watchify(function (watchify) {
    return gulp.src(bundlePaths.src)
        .pipe(watchify({
            watch: watching
        }))
        .pipe(gulp.dest(bundlePaths.dest))
}));

gulp.task('watchify', ['enable-watch-mode', 'browserify']);


// Rerun tasks when a file changes
gulp.task('watch', ['watchify'], function () {
    // ... other watch code ...
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['browserify']);
