var path = require('path');
var webpack = require('webpack');
// var webpackMerge = require('webpack-merge');
const { merge } = require('webpack-merge');

const webpackMerge = merge;

var baseConfig = {  
  // target: 'async-node',
  entry: {
    entry: './entry.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    chunkFormat: 'module'
    // chunkFormat: 'array-push',
    // chunkFormat: 'commonjs'
  },
  optimization: {
    minimize: false, // testing only
    removeEmptyChunks: true,
    removeAvailableModules: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    runtimeChunk: 'single',
    moduleIds: 'named',
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all'
    }
  },
  // plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'inline',
    //   filename: 'inline.js',
    //   minChunks: Infinity
    // }),
    // new webpack.optimize.AggressiveSplittingPlugin({
    //     minSize: 5000,
    //     maxSize: 10000
    // }),
  // ]
};

// let targets = ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main', 'es6'].map((target) => {
let targets = ['web', 'browserslist', 'es6'].map((target) => {
  let base = webpackMerge(baseConfig, {
    target: target,
    output: {
      path: path.resolve(__dirname, './dist/' + target),
      filename: '[name].' + target + '.js'
    }
  });
  return base;
});

module.exports = targets;
