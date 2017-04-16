import forge from 'mappersmith';
import appConfig from 'config/app';

const preparePath = (path) => `${path}?app_id=${appConfig.appId}`;

const client = forge({
    host: (appConfig.useStubs)
        ? "http://localhost:3000/"
        : "https://openexchangerates.org/api/",
    resources: {
        currency: {
            latest: { path: preparePath('latest.json') },
        },
    }
});

export default client;