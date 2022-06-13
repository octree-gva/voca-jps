var url = "https://raw.githubusercontent.com/octree-gva/voca-jps/main/scripts/mixins/settings.yml";
var settings = toNative(new Yaml().load(new Transport().get(url)));
return {
    result: 0,
    settings: settings
};
