var webpack = require('webpack');
var path = require('path');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
});
var friendlyErrorMessagePlugin = new FriendlyErrorsWebpackPlugin();
var devServerPort = 8090;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, 'app'),
  entry: [
    'webpack-dev-server/client?http://localhost:' + devServerPort,
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

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
    definePlugin,
    friendlyErrorMessagePlugin
  ],
  target: 'web',
  devServer: {
    port: devServerPort,
    quiet: true, // This is because we are using another friendlyErrorMessagePlugin
    contentBase: path.resolve(__dirname, 'bundle'),
    // match the output path
    publicPath: '/',
    compress: true,
    // match the output `publicPath`
    historyApiFallback: true,
    proxy: { // This is so that any request going to localhost:8080/api will be redirected to localhost:1337
      '/api/*': {
        target: 'http://localhost:1337',
        rewrite: function (req) {
          req.url = req.url.replace(/^\/api(.+)$/, '$1');
        }
      }
    }
  }
};
