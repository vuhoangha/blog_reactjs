const gulp = require('gulp');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');

gulp.task('browserify', () => {
    gulp.src('src/js/app.js')
        .pipe(browserify({ transform: 'reactify' }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/style/main.css')
        .pipe(gulp.dest('dist/style'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', () => {
    gulp.watch('src/**/*.*', ['default']);
});
