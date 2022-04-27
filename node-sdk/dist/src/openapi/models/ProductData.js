"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductData = void 0;
class ProductData {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ProductData.attributeTypeMap;
    }
}
exports.ProductData = ProductData;
ProductData.discriminator = undefined;
ProductData.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "string",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ProductData.js.map