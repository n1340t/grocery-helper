const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        // Only run `.js` and `.jsx` files through Babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // Skip any files outside of your project's `src` directory
        // include: [path.resolve(__dirname, 'src')],
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      }
    ]
  },
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
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ inject: true, template: './src/index.html' })
  ]
};
