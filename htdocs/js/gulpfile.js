"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    del = require('del');


gulp.task('concatScripts', function(){
	return gulp.src([
		'js/main.js'])
	.pipe(maps.init())
	.pipe(concat('main.js'))
	.pipe(maps.write('./'))
	.pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", ['concatScripts'], function(){
    return gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});


gulp.task('compileSass', function(){
	return gulp.src('css/site.scss');
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'));
});

gulp.task('watchFiles', function(){
	gulp.watch('css/**/*.scss', ['compileSass']);
	gulp.watch('js/main.js', ['concatScripts']);
});

gulp.task('clean', function(){
	del(['dist', 'css/site.css*', 'js/app*.js*']);
});

gulp.task('build', ['minifyScripts', 'compileSass',] function(){
    return gulp.scr(['css/site.css', 'js/main.js', 'index.html', 'img/**', 'fonts/**'], {base: './'})
    .pipe(gulp.dest('dist'));

});

gulp.task('serve', ['watchFiles']);

gulp.task("default", ["clean"], function() {
    	gulp.start('build');
    });