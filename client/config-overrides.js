const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config,
  ) // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@body-background': '#e8e8e8',
      '@primary-color': '#64A5BC',
      '@layout-header-background': '#FFF',
      '@layout-footer-background': '#64A5BC',
      '@layout-footer-padding': '1px 10px;',
    },
  })(config, env)
  return config
}