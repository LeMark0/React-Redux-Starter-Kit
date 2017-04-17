import forge from 'mappersmith';
import config from './config';

const apiAlias = (config.useStubs)
    ? 'localhost'
    : 'openexchangerates';

const preparePath = (resource) => `${resource}?app_id=${config.api[apiAlias].appId}`;

const client = forge({
    host: config.api[apiAlias].host,
    resources: {
        currency: {
            latest: { path: preparePath('latest.json') },
        },
    }
});

export default client;