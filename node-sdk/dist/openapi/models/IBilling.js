"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBilling = void 0;
class IBilling {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IBilling.attributeTypeMap;
    }
}
exports.IBilling = IBilling;
IBilling.discriminator = undefined;
IBilling.attributeTypeMap = [
    {
        "name": "retry_period_days",
        "baseName": "retry_period_days",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=IBilling.js.map