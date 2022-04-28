"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeData = void 0;
class FeeData {
    constructor() {
    }
    static getAttributeTypeMap() {
        return FeeData.attributeTypeMap;
    }
}
exports.FeeData = FeeData;
FeeData.discriminator = undefined;
FeeData.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "string",
        "format": ""
    },
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=FeeData.js.map