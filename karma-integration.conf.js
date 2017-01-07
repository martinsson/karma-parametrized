module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    frameworks: [
      'jasmine'
    ],

    files: [
        'integration-test/**/*.spec.js',
        'src'
    ],

    // web server port
    port: 8080,

    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    colors: true

  });
};
