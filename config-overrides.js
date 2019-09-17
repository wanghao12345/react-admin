const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}


process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),
  addWebpackAlias({
    '@': resolve('src')
  })
)