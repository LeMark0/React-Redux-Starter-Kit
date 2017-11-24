import config from './config';

export const method = {
  post: 'post',
  get: 'get',
};

const methodList = {
  currency: {
    latest: {
      useStub: true,
      host: config.api.openexchangerates.host,
      method: method.get,
      url: 'latest', // required
      transformRequest: (/* params */) => ({}),
    },
  },
};

function generateAlias(list, pathList = []) {
  return Object.keys(list).reduce((acc, curr) => {
    const paths = [...pathList, curr];

    acc[curr] = (list[curr].url)
      ? { ...list[curr], alias: paths.join('.') }
      : generateAlias(list[curr], paths);

    return acc;
  }, {});
}

export default generateAlias(methodList);
