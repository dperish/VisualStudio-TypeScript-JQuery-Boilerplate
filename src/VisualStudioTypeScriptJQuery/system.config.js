System.config({
    baseURL: "/scripts",
    defaultJSExtensions: true,
    paths: {},
    map: {
        "app": "app",
        "jquery": "jquery-1.12.4.min.js"
    },
    meta: {
        "*.js": {
            scriptLoad: true,
            format: "amd"
        },
        "jquery": {
            format: "amd",
            exports: "$"
        }
    },
    packages: {
        "app": {
            defaultExtension: "js",
            format: "amd"
        }
    }
});