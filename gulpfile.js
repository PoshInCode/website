let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require("gulp-rename");
let uglify = require('gulp-uglify');

// Copy 3rd-party libraries from /node_modules into /vendor
gulp.task('vendor', function() {
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'));

  gulp.src([
      './node_modules/font-awesome/**/*',
      '!./node_modules/font-awesome/{less,less/*}',
      '!./node_modules/font-awesome/{scss,scss/*}',
      '!./node_modules/font-awesome/.*',
      '!./node_modules/font-awesome/*.{txt,json,md}'
    ])
    .pipe(gulp.dest('./vendor/font-awesome'));

  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'));

  gulp.src([
      './node_modules/jquery.easing/*.js'
    ])
    .pipe(gulp.dest('./vendor/jquery-easing'))
});

gulp.task('css:minify', function() {
  return gulp.src([
      './css/*.css',
      '!./css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('css', gulp.parallel('css:minify'));

gulp.task('js:minify', function() {
  return gulp.src([
      './js/*.js',
      '!./js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'));
});

gulp.task('js', gulp.parallel('js:minify'));

gulp.task('default', gulp.parallel('css', 'js', 'vendor'));
