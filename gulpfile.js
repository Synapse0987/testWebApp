const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Paths
const paths = {
  src: {
    sass: 'src/**/*.scss',
    js: 'src/**/*.js'
  },
  dist: {
    root: 'dist',
    css: 'dist/css',
    js: 'dist/js'
  }
};

// HTML task
function html() {
  return gulp.src('*.html') // Update the path to match your HTML file
    .pipe(gulp.dest(paths.dist.root));
}

// CSS task
function css() {
  return gulp.src(paths.src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist.css));
}

// JS task
function js() {
  return gulp.src(paths.src.js)
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js));
}

// Default task
gulp.task('default', gulp.series(gulp.parallel(html, css, js)));
