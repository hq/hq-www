'use strict';


/**
 * dependencies
 */
var gulp = require('gulp');
var gulpif = require('gulp-if');
var fs = require('fs');
var argv = require('yargs').argv;
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
// var fileinclude = require('gulp-file-include');
var stylus = require('gulp-stylus');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var nib = require('nib');
var rupture = require('rupture');
// var uglify = require('gulp-uglify');
// var minifyHtml = require('gulp-minify-html');
var zab = require('zab');


/**
 * config
 */
var config = {
  prod: argv.production,
  app: './public'
};


/**
 * default tasks
 */
gulp.task('default', ['clean', 'styles'], function() {
  if (!config.prod) {
    gulp.start('server', 'watch');
  }
});


/**
 * clean
 */
gulp.task('clean', function() {
  del([config.app+'/styles/app.css*']);
});


/**
 * styles
 */
gulp.task('styles', function() {
  var folder = config.app + '/styles';

  return gulp.src(folder + '/app.styl')
    .pipe(gulpif(!config.prod, sourcemaps.init()))
    .pipe(stylus({
      compress: config.prod,
      use: [nib(), rupture(), postcss('autoprefixer')]
    }))
    .pipe(gulpif(!config.prod, sourcemaps.write('./')))
    .pipe(gulp.dest(folder));
});


/**
 * javascript
 */
// gulp.task('javascript', function() {
//   return gulp.src(config.app+'/js/**/*')
//     .pipe(gulpif(config.prod, uglify()))
//     .pipe(gulp.dest(config.build+'/js'));
// });


/**
 * process html
 */
// gulp.task('html', function() {
//   gulp.src(config.app+'/pages/**/*.html')
//     .pipe(fileinclude())
//     .pipe(gulpif(config.prod, minifyHtml({
//       browsers: ['last 3 versions'],
//       conditionals: true
//     })))
//     .pipe(gulp.dest(config.build));
// });


/**
 * superstatic server
 */
gulp.task('server', function() {
  return zab().listen(6219);
});


/**
 * watch
 */
gulp.task('watch', function() {
  gulp.watch(config.app+'/styles/**/*', ['styles']);
  // gulp.watch(config.app+'/js/**/*', ['javascript']);
  // gulp.watch(config.app+'/**/*.html', ['html']);
});
