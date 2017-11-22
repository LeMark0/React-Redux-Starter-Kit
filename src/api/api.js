import forge from 'mappersmith';
import get from 'lodash/get';
import config from './config';
import resources, { method } from './resources';

// TODO config
const apiAlias = 'localhost';

const createStubURI = (uri = '') => `${(
  uri
    .replace(/(\/\{\w+\})/g, '')
    .replace(/\//g, '_')
)}.json`;

const prepareResources = (list = {}) => {
  const result = {};

  Object.keys(list).forEach((groupKey) => {
    const methodList = list[groupKey];
    result[groupKey] = {};

    Object.keys(methodList).forEach((methodKey) => {
      const item = methodList[methodKey];

      result[groupKey][methodKey] = {
        ...item,
        path: (item.useStub) ? createStubURI(item.path) : item.path,
        method: (item.useStub) ? 'get' : item.method,
      };
    });
  });

  return result;
};

const dataMiddleware = ({ resourceName, resourceMethod }) => ({
  request(request) {
    console.log('request: ', request);
    const resourceConfig = resources[resourceName][resourceMethod];
    if (request.requestParams && resourceConfig && resourceConfig.method === method.post) {
      let headers = request.headers();
      if (request.requestParams.postHeaders) {
        headers = {
          ...headers,
          ...request.requestParams.postHeaders,
        };
        delete request.requestParams.postHeaders;
      }

      const content = JSON.stringify(request.requestParams);
      request.requestParams = {
        headers,
        body: content,
      };
      return request;
    }
    return request;
  },

  response(next) {
    return next().then((response) => response);
  },
});

const stubMiddleware = () => ({
  request(request) {
    return request.enhance({
      path: createStubURI(request.path()),
    });
  },
});

const client = forge({
  resources,
  middlewares: [dataMiddleware],
  host: config.api[apiAlias].host,
});

const stubClient = forge({
  resources: prepareResources(resources),
  middlewares: [dataMiddleware, stubMiddleware],
  host: config.api.stub.host,
});

export default function (resource, params) {
  const resourceConfig = get(resources, resource);

  return get(
    (resourceConfig.useStub) ? stubClient : client,
    resource,
  )(params);
}
