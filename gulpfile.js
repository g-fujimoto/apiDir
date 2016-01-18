
/* ======================================================================================= Modules */
var gulp    = require('gulp');
var babel   = require('gulp-babel');
var plumber = require('gulp-plumber');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');

/* ======================================================================================= Tasks */

gulp.task('babel', function() {
    gulp.src('./src/**/*.es6')
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        // .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

/* ======================================================================================= Watch */

gulp.task('watch', function() {
    // Babel Compile
    gulp.watch('./src/**/*.es6', ['babel']);
});

/* ======================================================================================= Default */
gulp.task('default', ['watch']);
