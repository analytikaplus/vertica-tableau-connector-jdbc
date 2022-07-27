(function propertiesbuilder(attr) {
    var props = {};
    props["user"] = attr["username"];
    props["password"] = attr["password"];

    return props;
})