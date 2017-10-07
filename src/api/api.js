import forge from 'mappersmith';
import config from './config';
import get from 'lodash/get';

const apiAlias = (config.useStubs)
  ? 'localhost'
  : 'openexchangerates';

const defaultParams = {
  app_id: config.api[apiAlias].appId
};

const client = forge({
  host: config.api[apiAlias].host,
  resources: {
    currency: {
      latest: {path: 'latest.json'},
    },
  }
});

export default function (resource, params) {
  return get(client, resource)({...defaultParams, params});
}