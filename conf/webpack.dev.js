const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
  }
});
