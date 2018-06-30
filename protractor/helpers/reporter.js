"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.reporter = function () {
    jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
        customProcessors: [jasmine_spec_reporter_1.DisplayProcessor],
    }));
};
//# sourceMappingURL=reporter.js.map