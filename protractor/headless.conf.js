"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var reporter_1 = require("./helpers/reporter");
exports.config = {
    framework: 'jasmine',
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['../test/**/*.spec.js'],
    noGlobals: true,
    getPageTimeout: 30000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().timeouts().implicitlyWait(0);
        reporter_1.reporter();
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=800,600']
        }
    }
};
//# sourceMappingURL=headless.conf.js.map