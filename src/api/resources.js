export const method = {
  post: 'post',
  get: 'get',
};

const methodList = {
  currency: {
    latest: {
      useStub: true,
      method: method.get,
      path: 'latest',
      getRequest: (/* params */) => ({}),
    },
  },
};

function generateAlias(list, pathList = []) {
  return Object.keys(list).reduce((acc, curr) => {
    const paths = [...pathList, curr];

    acc[curr] = (list[curr].path)
      ? { ...list[curr], alias: paths.join('.') }
      : generateAlias(list[curr], paths);

    return acc;
  }, {});
}

export default generateAlias(methodList);
