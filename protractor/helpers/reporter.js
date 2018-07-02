"use strict";
exports.__esModule = true;
var jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.reporter = function () {
    jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
        customProcessors: [jasmine_spec_reporter_1.DisplayProcessor]
    }));
};
