'use strict';

let buildKarmaConf = require('./buildKarmaConf');

module.exports = function(config) {

  var testFiles = 'unit-test/**/*.spec.js'
  var port = 8080
  var karmaConfObject = buildKarmaConf(testFiles, port)
  config.set(karmaConfObject);
};
