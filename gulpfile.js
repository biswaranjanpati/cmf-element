var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jsImport = require('gulp-js-import');


gulp.task('sass', function() {

	return gulp.src('./scss/main.scss')
        .pipe(sass())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function() {
	return gulp.src('js/*.js')
        .pipe(jsImport({hideConsole: true}))
        .pipe(concat('main.js'))
		.pipe(gulp.dest('./assets/js'));
});

gulp.task('watch',function() {
	gulp.watch("scss/**/*.scss", ['sass']);
	gulp.watch("js/*.js", ['js']);
});
gulp.task('default', ['sass','js']);