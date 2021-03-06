var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    library: 'vue-m-carousel',
    libraryTarget: 'umd',
    path: config.build.assetsRoot,
    filename: '[name].js'
  },
  externals: {
    vue: 'vue'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
      exclude: /node_modules/
    }]
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}
