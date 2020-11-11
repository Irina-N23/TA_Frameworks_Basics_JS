"use strict";

const yargs = require("yargs").argv;

exports.config = {
    directConnect: true,
    baseUrl: "localhost",

    framework: "mocha",
    mochaOpts: {
        reporter: "mochawesome",
        timeout: 70000
    },

    specs: "../specs/*.spec.js",

    capabilities: {
        "browserName": yargs.browser || "chrome",
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1
    },

    onPrepare: () => {
        browser.manage().window().setSize(1920, 1080);
    }
}