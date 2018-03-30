'use strict';
//Main files
const gulp = require('gulp');
const rename = require('gulp-rename');

//Concatened the files
const concat = require('gulp-concat');

//Minified the code
const uglify = require('gulp-uglify');

//Convert sass to css
const sass = require('gulp-sass');

//Transpiler
const babel = require('gulp-babel');

//Sass to Css ->
gulp.task('sass', function(){
	return gulp.src('sass/styles.scss')
    	.pipe(sass()) // Converts Sass to CSS with gulp-sass
    	.pipe(gulp.dest('dist'));
});

//Modules Es6 to regular minified Es5 file ->
gulp.task('compile-js', function() {
  return gulp.src('app/*')
    .pipe(concat('all.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('dist'));
});


//Observers
gulp.task('watch-sass', function() {
  gulp.watch('sass/styles.scss', ['sass']);
  gulp.watch('sass/*/*.scss', ['sass']);
});

gulp.task('watch-js', function() {
  gulp.watch('app/*', ['optimise']);
});

gulp.task('watch-all', function() {
  gulp.watch('app/*', ['compile-js']);
  gulp.watch('sass/styles.scss', ['sass']);
  gulp.watch('sass/*/*.scss', ['sass']);
});