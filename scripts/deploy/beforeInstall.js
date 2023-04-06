// Setup a 502 page before starting deploying the application

var log = function (message) {
  if (jelastic.marketplace && jelastic.marketplace.console && message) {
    jelastic.marketplace.console.WriteLog('BEFORE_INSTALL    ' + message);
  }
};

var jps =
    'https://raw.githubusercontent.com/octree-gva/voca-jps/main/scripts/deploy/traefik-error.yml?_r=${fn.random}',
  envName = '${settings.TRAEFIK_ENVNAME}',
  settings = toJSON({
    URL: '${settings.PUBLIC_DOMAIN}',
    SERVICE_NAME: '${settings.SERVICE_NAME}',
    SERVICE_HOST_NAME: '${settings.SERVICE_HOST_NAME}',
    ERROR_URL: '${settings.ERROR_URL}',
    ERROR_CODE: '502',
  });

log('jps=' + jps);
log('envName=' + envName);
log('settings=' + settings);
var response = jelastic.marketplace.jps.install(jps, envName, settings);
log('RESULTS    ' + toJSON(response));

return {
  result: response.result,
};
