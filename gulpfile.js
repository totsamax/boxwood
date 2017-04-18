var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var cleanDest = require('gulp-clean-dest');

//server
gulp.task('start', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true
    }));
});


//styles
gulp.task('style', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
        browsers:['last 15 versions']
    }))
    .pipe(gulp.dest('app/css'));
});


//IMAGES
gulp.task('images', function () {
    return gulp.src('./app/img/**/*')
        .pipe(imagemin({
          progressive: true
        }))
        .pipe(gulp.dest('public/img'));
});


//build
gulp.task('build',['images'], function () {
    return gulp.src('./app/*.html')
        .pipe(cleanDest('public'))
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', csso()))
        .pipe(gulp.dest('public'));
});


gulp.task('watch',function(){
    gulp.watch('app/sass/**/*.scss',['style']);
});

gulp.task('default', ['start','style','watch']);