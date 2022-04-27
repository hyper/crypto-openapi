"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Data.attributeTypeMap;
    }
}
exports.Data = Data;
Data.discriminator = undefined;
Data.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<PayoutWallet>",
        "format": ""
    },
    {
        "name": "hasMore",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": ""
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=Data.js.map