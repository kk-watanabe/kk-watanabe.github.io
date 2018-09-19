const gulp    = require('gulp');
const config  = require('../config');
const setting = config.setting;
const $       = require('gulp-load-plugins')(config.loadPlugins);

// HTML
gulp.task('html', () => {
  return gulp.src(
      setting.path.html.src,
      {base: setting.path.base.src}
    )
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
    }))
    .pipe($.changed(setting.path.base.dest))
    .pipe(gulp.dest(setting.path.base.dest))
    .pipe($.browserSync.reload({stream: true}));
});
