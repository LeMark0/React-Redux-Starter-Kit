const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const pathList = require('./pathList');
const loaders = require('./webpack.loaders');
const vendorList = require('./webpack.vendor');
const constants = require('./webpack.constants');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new HtmlWebpackPlugin({
    template: './static/index.html',
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ),
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  );
}

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      `${pathList.src}/index.jsx`,
    ],
    vendor: vendorList,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      pathList.src,
      'node_modules'
    ],
    alias: {
      components: path.resolve(__dirname, `${pathList.src}/components/`),
      containers: path.resolve(__dirname, `${pathList.src}/containers/`),
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: pathList.src,
    hot: true,
    port: constants.port,
    historyApiFallback: true,
  },
  module: {
    loaders,
  },
  plugins: plugins
};
