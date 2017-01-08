"use strict";

function buildKarmaConf (testFiles, port) {
    var sourceFiles = ['src']
    var allSourcesAndSomeTestFiles = sourceFiles.concat(testFiles)

    return {
        files: allSourcesAndSomeTestFiles,

        // web server port
        port: port,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        frameworks: [
            'jasmine'
        ],

        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],

        colors: true

    }
}

module.exports = buildKarmaConf