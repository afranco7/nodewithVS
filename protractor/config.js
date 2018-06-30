"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var reporter_1 = require("./helpers/reporter");
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/Google.spec.js'],
    noGlobals: true,
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
        reporter_1.reporter();
    }
};
//# sourceMappingURL=config.js.map