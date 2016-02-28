
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
    compileSass('flex.grid.scss');
    compileSass('flex.table.scss');
});

gulp.task('minify',function(){
    minifyGrid();
    minifyTable();
});


///private
function compileSass(src){
    gulp.src('./src/' + src)
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

function minifyGrid(){
    concatStream('./dist/flex.grid.css','flex.grid.min.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
}

function minifyTable(){
    concatStream('./dist/flex.table.css','flex.table.min.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
}

function concatStream(src,name){
    return gulp.src(src)
        .pipe(concat(name))

}