var gulp = require('gulp');
var watch = require('gulp-watch');
var run = require('gulp-run');

gulp.task('runtime', function () {
    gulp.src('node_modules/traceur/bin/traceur.js')
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', function () {
    run('node_modules/traceur/traceur --out dist/core.js src/Main.js').exec();
});

gulp.task('default', ['runtime', 'build'], function () {
    watch('src/*.js', function () {
        run('node_modules/traceur/traceur --out dist/core.js src/Main.js').exec()
    });
});
