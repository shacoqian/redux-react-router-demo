var path = require('path')
var webpack = require('webpack')
//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  devtool: 'eval',
  // devtool:false,
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  //  new CommonsChunkPlugin("commons.js")
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'react-hot!babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}