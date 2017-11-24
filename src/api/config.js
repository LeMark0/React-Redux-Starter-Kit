const config = {
  useStubs: true,
  api: {
    stub: {
      host: 'http://localhost:3000/',
      appId: 0,
    },
    localhost: {
      host: 'http://localhost:3000/',
      appId: 0,
    },
    openexchangerates: {
      host: 'https://openexchangerates.org/api/',
      appId: '',
    },
  },
};

config.defaultHost = config.api.localhost;

export default config;
