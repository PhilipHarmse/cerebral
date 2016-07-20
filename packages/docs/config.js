var join = require('path').join

module.exports = {
  "themes": [
    join('..', 'node_modules', 'bem-components', 'common.blocks'),
    join('..', 'node_modules', 'bem-components', 'desktop.blocks'),
    join('..', 'node_modules', 'bem-components', 'design', 'common.blocks'),
    join('..', 'node_modules', 'bem-components', 'design', 'desktop.blocks'),
    "cerebral-website"
  ],
  "langs": [
    "en"
  ],
  "output": "dist",
  "debug": false,
  "server": {
    tunnel: false,
    open: false
  },
  "posthtmlPlugins": [].concat(
    require('mad-mark').posthtmlPlugins,
    require('./plugins/posthtml-prism'),
    require('./plugins/posthtml-md-tabs')
  ),
  "postcssPlugins": [
    require('sharps').postcss({
      columns: 24,
      maxWidth: '960px',
      gutter: '0',
      flex: 'flex'
    }),
    require('autoprefixer')(),
    require('cssnano')()
  ]
}
