'use strict';

let buildKarmaConf = require('./buildKarmaConf');

module.exports = function(config) {

    var testFiles = 'integration-test/**/*.spec.js'
    var port = 8081
    config.set(buildKarmaConf(testFiles, port));
};
