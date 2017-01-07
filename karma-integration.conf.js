'use strict';

let buildKarmaConf = require('./buildKarmaConf');

module.exports = function(config) {

    var testFiles = 'integration-test/**/*.spec.js'

    // use a different port so suites can be run in parallel
    var port = 8081

    var karmaConfObject = buildKarmaConf(testFiles, port)
    config.set(karmaConfObject);
};
