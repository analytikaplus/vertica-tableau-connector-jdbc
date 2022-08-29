(function dsbuilder(attr) {

    // building full URL string
    var urlBuilder = "jdbc:vertica://" + attr['server'] + ":" + attr['port'] + "/";
    return [urlBuilder];

})