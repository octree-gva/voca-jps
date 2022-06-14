// Setup a 502 page before starting deploying the application
var jps = 'https://raw.githubusercontent.com/octree-gva/voca-jps/main/scripts/deploy/traefik-maintenance.yml?_r=${fn.random}', 
    envName = '${settings.TRAEFIK_ENVNAME}', 
    settings=JSON.stringify({
        "URL": '${settings.PUBLIC_DOMAIN}',
        "SERVICE_NAME": 'decidim-${settings.INSTANCE_UUID}',
        "ERROR_URL": '${settings.ERROR_URL}'
    });

jelastic.marketplace.jps.install({jps, envName, settings, loggerName:"TRAEFIK_MAINTENANCE", skipNodeEmails: true});

return {
    result: 0
}