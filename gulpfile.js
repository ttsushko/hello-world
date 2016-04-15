var gulp 	= require('gulp'),
	del     = require('del'),
    rename  = require('gulp-rename'),
    sass    = require('gulp-sass');

var config  = require('./config.json');
config.paths.distCss = config.paths.dest + '/css'

gulp.task('clean', function (cb) {
    del.sync([config.paths.dest], cb);   
});

gulp.task('html', function () {
    return gulp.src(['src/*.html'])
           .pipe(gulp.dest(config.paths.dest));    
});

gulp.task('styles', function () {
    return gulp.src('src/scss/app.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest(config.paths.distCss))
});

gulp.task('watch', function () {

    //gulp.watch(config.paths.js, ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('./src/*.html', ['html']);
});

gulp.task('dev', ['clean', 'html', 'styles', 'watch']);