const eslintFormatter = require('react-dev-utils/eslintFormatter');
const constants = require('./webpack.constants');
const pathList = require('./webpack.pathList');

const { USE_LINT } = constants;

let esLint = null;
if (USE_LINT) {
  esLint = {
    test: /\.(js|jsx)$/,
    enforce: 'pre',
    use: [
      {
        options: {
          formatter: eslintFormatter,
          emitError: true,
          emitWarning: true,
          failOnWarning: false,
          failOnError: false,
        },
        loader: require.resolve('eslint-loader'),
      },
    ],
    include: pathList.appSrc,
    exclude: [
      /(node_modules)/,
      pathList.vendorLibs,
    ],
  };
}
module.exports = esLint;
