// imports
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

// compile sass
gulp.task('sass', () =>
  gulp
    .src('./src/sass/main.sass')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/'))
);

// compile babel
gulp.task('babel', () =>
  gulp
    .src('src/scripts/utilities.js')
    .pipe(babel())
    .pipe(rename({ suffix: '.babel' }))
    .pipe(gulp.dest('./public/'))
);

// watch files
gulp.task('watch', () =>
  gulp
    .watch([
      './src/sass/**/*.sass',
      './src/scripts/**/*.js',
      './public/index.html'
    ])
    .on('change', gulp.series('sass', 'babel', browserSync.reload))
);

// server
gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './public/'
    },
    open: false
  });
});

gulp.task('default', gulp.parallel('watch', 'server', done => done()));
