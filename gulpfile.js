
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');
var concat=require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
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

gulp.task('minify',function(){
    concatStream('./dist/flex.grid.css','flex.grid.min.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
});


///private
function compileSass(){
    gulp.src('./src/flex.grid.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

function concatStream(src,name){
    return gulp.src(src)
        .pipe(concat(name))

}