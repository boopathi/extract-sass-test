var webpack = require('webpack');
var Extract = require('extract-text-webpack-plugin');
var LocalScope = require('postcss-local-scope');
var path = require('path');
var echoLoader = path.join(__dirname, 'echo-loader');
var sassLoader = path.join(__dirname, 'sass-loader');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  postcss: [ LocalScope ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: Extract.extract(
          echoLoader +
          '!css?sourceMap' +
          '!' + echoLoader +
          '!postcss'+
          '!' + echoLoader +
          // '!sass?sourceMap'
          '!' + sassLoader
        )
      }
    ]
  },
  plugins: [
    new Extract('bundle.css', {
      allChunks: true
    })
  ]
};
