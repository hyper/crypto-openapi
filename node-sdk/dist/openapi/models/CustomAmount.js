"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAmount = void 0;
class CustomAmount {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomAmount.attributeTypeMap;
    }
}
exports.CustomAmount = CustomAmount;
CustomAmount.discriminator = undefined;
CustomAmount.attributeTypeMap = [
    {
        "name": "_default",
        "baseName": "default",
        "type": "number",
        "format": "double"
    },
    {
        "name": "maximum",
        "baseName": "maximum",
        "type": "number",
        "format": "double"
    },
    {
        "name": "minimum",
        "baseName": "minimum",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=CustomAmount.js.map