const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development', // "production" | "development" | "none",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    // inline is true by default,
    hot: true,
    open: true,
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  },
});
