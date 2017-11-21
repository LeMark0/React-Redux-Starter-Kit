let buildEnv = 'client_develop';
const env = process.argv.indexOf('--env');
if (env !== -1 && process.argv[env + 1] != null) {
  buildEnv = process.argv[env + 1];
}

module.exports = {
  port: 8080,
  BUILD_ENV: buildEnv,
  CLEAN_OUTPUT: process.argv.includes('--env.clean-output'),
  MIN: process.argv.includes('--env.min'),
  USE_LINT: process.argv.includes('--env.lint'),
};
