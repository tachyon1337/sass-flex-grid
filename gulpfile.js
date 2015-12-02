
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');
var REPO_NAME='sass-flex-grid';

gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp dist|sassdoc"');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());

});

gulp.task('dist', function () {
    compileSass();
});


///private
function compileSass(){
    gulp.src('./src/flex-grid.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

