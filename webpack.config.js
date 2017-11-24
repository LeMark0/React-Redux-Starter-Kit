const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const pathList = require('./pathList');
const loaders = require('./webpack.loaders');
const constants = require('./webpack.constants');
const vendorList = require('./webpack.vendor');
const eslintPlugin = require('./webpack.eslint');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(constants.BUILD_ENV),
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks: Infinity,
  }),
  new HtmlWebpackPlugin({
    template: './static/index.html',
  }),
];

if (eslintPlugin) {
  plugins.push(eslintPlugin);
}

module.exports = {
  plugins,
  entry: {
    app: [
      'babel-polyfill',
      `${pathList.src}/index.jsx`,
    ],
    vendor: vendorList,
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    sourceMapFilename: '[name].js,map',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      pathList.src,
      'node_modules',
    ],
    alias: {
      components: path.resolve(__dirname, `${pathList.src}/components/`),
      containers: path.resolve(__dirname, `${pathList.src}/containers/`),
    },
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
  devServer: {
    contentBase: pathList.src,
    hot: true,
    port: constants.port,
    historyApiFallback: true,
  },
  module: {
    loaders,
  },
};
