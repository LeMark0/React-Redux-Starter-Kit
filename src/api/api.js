import axios from 'axios';
import get from 'lodash/get';
import flow from 'lodash/flow';
import resourceList from './resources';
import apiConfig from './config';

function getResourceHost(resourceConfig) {
  if (resourceConfig.useStub) {
    return apiConfig.api.stub.host;
  }

  return (resourceConfig.host)
    ? resourceConfig.host
    : apiConfig.defaultHost.host;
}

const createStubURI = (uri = '') => `${(
  uri
    .replace(/(\/\{\w+\})/g, '')
    .replace(/\//g, '_')
)}.json`;

function prepareResource(resourceConfig = {}) {
  return flow(
    (config) => ({ ...config, host: getResourceHost(config) }),
    (config) => ({ ...config, url: createStubURI(config.url) }),
  )(resourceConfig);
}

export default function (resource, params) {
  const resourceConfig = prepareResource(get(resourceList, resource));
  console.log('resourceConfig: ', resourceConfig);

  return axios({
    method: resourceConfig.method,
    baseURL: getResourceHost(resourceConfig),
    url: resourceConfig.url,
    data: params,
    transformRequest: [resourceConfig.transformRequest],
  });
}
