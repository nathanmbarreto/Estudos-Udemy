const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // aqui sim precisa passar o compilador
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat') // apenas isso

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML(){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoCSS, copiarHTML)