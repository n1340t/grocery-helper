const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development', // "production" | "development" | "none"
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    //inline is true by default,
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
});
