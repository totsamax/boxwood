var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

//server
gulp.task('start', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
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

gulp.task('watch',function(){
    gulp.watch('app/sass/**/*.scss',['style']);
})

gulp.task('default', ['start','style','watch']);