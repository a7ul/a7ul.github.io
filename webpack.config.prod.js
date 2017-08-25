var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
});
var webpackCompressionPlugin = new CompressionPlugin({
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0
});
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  mangle: true,
  compress: {
    warnings: false, // Suppress uglification warnings
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    screw_ie8: true
  },
  output: {
    comments: false,
  },
  exclude: [/\.min\.js$/gi] // skip pre-minified libs
});

module.exports = {
  devtool: false,
  context: path.resolve(__dirname, 'app'),
  entry: [
    './index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/',
    sourceMapFilename: 'bundle.js.map'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: [{
          loader: 'file-loader',
          options: {name: 'assets/[hash].[ext]'}
        }]
      }
    ],
    noParse: [/ws\/lib/]
  },
  plugins: [
    definePlugin, uglifyPlugin, webpackCompressionPlugin
  ],
  target: 'web'
};
