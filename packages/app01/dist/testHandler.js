"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testHandler = void 0;
const domain_1 = require("@trcore/domain");
const testHandler = async (req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.json({ message: (0, domain_1.GetPerson)(), status: "OK" });
    resp.end();
};
exports.testHandler = testHandler;
