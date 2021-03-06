var gulp    = require("gulp");
var concat  = require("gulp-concat");
var clean   = require("gulp-clean");
var files   = require("./files.json");

gulp.task("clean", function() {
  return gulp.src(["dist/*"], {read:false}).pipe(clean());
});

gulp.task("libs", function() {
  gulp.src(files.libs)
  .pipe(concat("libs.js"))
  .pipe(gulp.dest("./dist/"))
});

gulp.task("fa", function() {
  gulp.src(files.fa)
  .pipe(gulp.dest("./dist/css/font_awesome/"))
});

gulp.task("styles", ["fa"], function() {
  gulp.src(files.styles)
  .pipe(gulp.dest("./dist/css"))
});

gulp.task("images", function() {
  gulp.src(files.images)
  .pipe(gulp.dest("./dist/images"))
});

gulp.task("fonts", function() {
  gulp.src(files.fonts)
  .pipe(gulp.dest("./dist/fonts"))
});

gulp.task("html", function() {
  gulp.src(files.html)
  .pipe(gulp.dest("./dist"))
});

gulp.task("icons", function() {
  gulp.src(files.icons)
  .pipe(gulp.dest("./dist/res"))
});


gulp.task("src", ["html", "images"], function() {
  gulp.src(files.src)
  .pipe(concat("src.js"))
  .pipe(gulp.dest("./dist"))
});


gulp.task("default", [
    "clean", 
    "styles", 
    "libs",
    "src",
    "fonts",
    "icons"
    ]);
