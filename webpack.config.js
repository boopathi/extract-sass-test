var webpack = require('webpack');
var Extract = require('extract-text-webpack-plugin');
var LocalScope = require('postcss-local-scope');
var path = require('path');
var echoLoader = path.join(__dirname, 'echo-loader');
var sassLoader = path.join(__dirname, 'sass-loader');
var postcssLoader = path.join(__dirname, 'postcss-loader');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  postcss: [ LocalScope ],
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loader: Extract.extract(
          'css?sourceMap'
          // '!' + echoLoader +
          + '!postcss'
          // '!' + postcssLoader +
          // '!' + echoLoader +
          + '!' + sassLoader
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
