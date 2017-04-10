const path = require('path')
const Metalsmith = require('metalsmith')
const filter = require('metalsmith-filter')
const ignore = require('metalsmith-ignore')
const moveUp = require('metalsmith-move-up')
const pug = require('metalsmith-pug')
const stylus = require('metalsmith-stylus')
const watch = require('metalsmith-watch')
const minimist = require('minimist')
const nib = require('nib')
const rupture = require('rupture')
const superstatic = require('superstatic').server
const browserify = require('metalsmith-browserify')

const argv = minimist(process.argv.slice(2))

const b = browserify({
  dest: 'scripts/app.bundled.js',
  entries: ['./src/assets/scripts/app.js'],
  sourcemaps: false,
  watch: false
});

b.bundle.transform({
  global: true
}, 'uglifyify')

new Metalsmith(__dirname)
  .use(filter([
    'assets/**',
    'styles/app.styl',
    'views/**'
  ]))
  .use(ignore([
    '**/_*',
    '!**/_redirects'
  ]))
  .use(moveUp([
    'assets/**',
    'styles/**',
    'views/**'
  ]))
  .use(pug({
    compress: true,
    basedir: path.resolve(__dirname, 'src'),
    locals: require('./data.json')
  }))
  .use(stylus({
    'include css': true,
    compress: true,
    use: [nib(), rupture()]
  }))
  .use(b)
  .use(argv.watch && watch())
  .source('src')
  .destination('dist')
  .build(err => err && console.error(err))

if (argv.watch) {
  superstatic({
    port: 8080,
    config: {
      public: 'dist',
      cleanUrls: true
    }
  }).listen(err =>
      console.log(err || 'Server running at http://localhost:8080'))
}
