/**
 * Created by nap on 17/10/30.
 */

fis.media('production').set('project.ignore', [
  'less/**',
  'components/**',
  'fis-conf.js'
]);

// 启用插件
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
});

fis.media('development').match('less/**.less', {
  parser: fis.plugin('less2', {
    sourceMap: true
  }),
  rExt: '.css'
});

fis.media('production').match('less/main.less', {
  preprocessor: fis.plugin('autoprefixer', {
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  }),
  parser: fis.plugin('less2', {
    sourceMap: false
  }),
  rExt: '.css',
  optimizer: fis.plugin('clean-css', {})
}).match('components/**', {
  release: false
});