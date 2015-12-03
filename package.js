Package.describe({
    name: 'dcworldwide:airapi',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {

    api.versionsFrom('1.2.0.1');

    Npm.depends({
        "cheerio": "0.19.0",
        //"lodash": "3.10.1",
        //"request": "2.66.0"
    });

    api.use([
        'dcworldwide:stp-log',
        'dcworldwide:stp-error',
        'ecmascript',
        'promise',
        'underscore',
        'http',
    ], ['client', 'server']);

    api.addFiles([
        'server/server.js'
    ], ['server']);

    api.addFiles([
        'helpers/serialize.js',
        'api/search.js',
        'api/getInfo.js',
        '_secrets.js',
        'configs.js',
        'airbnb.js',
    ]);

    api.export([
        'airbnb'
    ]);

});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('promise');
    api.use('okgrow:promise');
    api.use('tinytest');
    api.use('dcworldwide:airapi');
    api.addFiles('airbnb-test.js');
});
