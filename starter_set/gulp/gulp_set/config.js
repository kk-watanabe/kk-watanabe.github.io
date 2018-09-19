const base = {
  src: 'src/assets/',
  dest: 'httpdocs/assets/',
};

module.exports.setting = {
  autoprefixer: {
      browser: ['last 2 versions']
  },
  browserSync: {
    // 使わない方はコメントアウトする
    // proxy: 'test.test',
    server:{
        baseDir: 'httpdocs',
    },
  },
  imagemin: {
    disabled: false,  // falseでimageminを実行
    level: 7  // 圧縮率
  },
  // css、jsのミニファイの有効化/無効化
  minify: {
    js: true
  },
  path: {
    base: {
      src: 'src',
      dest: 'httpdocs'
    },
    sass: {
      src: base.src + 'sass/**/*.scss',
      dest: base.dest + 'css/',
    },
    js: {
      src: base.src + 'js/**/*.js',
      dest: base.dest + 'js/',
    },
    image: {
      src: base.src + 'img/**/*',
      dest: base.dest + 'img/',
    },
    include: {
      src: [base.src + 'inc/**/*'],
      dest: base.dest + 'inc/',
    },
    html: {
      src: ['src/**/*', '!src/assets/**/*']
    },
  }
};

/**
 * ロードモジュールの設定
 */
module.exports.loadPlugins = {
  pattern: ['gulp-*', 'gulp.*', 'browser-sync', 'run-sequence', 'del'],
  rename : {
    'browser-sync' : 'browserSync',
    'run-sequence' : 'sequence',
    'del'          : 'del',
  }
};
