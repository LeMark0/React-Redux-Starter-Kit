const constants = require('./webpack.constants');
const eslintPlugin = require('./webpack.eslint');
const webpack = require('webpack');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { pathList, path } = constants;

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(constants.BUILD_ENV),
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
  entry: `${pathList.src}/index.jsx`,
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
