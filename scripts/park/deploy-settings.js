/*
 * Takes a yml file with all the settings, and inject it in the current manifest.
 */
var url =
  'https://raw.githubusercontent.com/octree-gva/voca-jps/v0.0.6/scripts/mixins/deploy-settings.yml';
var settings = toNative(
  new org.yaml.snakeyaml.Yaml().load(
    new com.hivext.api.core.utils.Transport().get(url)
  )
);
return {
  result: 0,
  settings: settings,
};
