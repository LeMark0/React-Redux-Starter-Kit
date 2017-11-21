const fs = require('fs-extra');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
module.exports = {
  vendorLibs: resolveApp('src/libs/ext'),
  appSrc: resolveApp('src'),
  src: './src',
};
