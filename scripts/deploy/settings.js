var url = "https://raw.githubusercontent.com/octree-gva/voca-jps/main/scripts/mixins/settings.yml";
var settings = toNative(new org.yaml.snakeyaml.Yaml().load(new com.hivext.api.core.utils.Transport().get(url)));
return {
    result: 0,
    settings: settings
};
