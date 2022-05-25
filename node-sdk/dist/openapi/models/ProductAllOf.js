"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAllOf = void 0;
class ProductAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ProductAllOf.attributeTypeMap;
    }
}
exports.ProductAllOf = ProductAllOf;
ProductAllOf.discriminator = undefined;
ProductAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "prices",
        "baseName": "prices",
        "type": "Array<Price>",
        "format": ""
    }
];
//# sourceMappingURL=ProductAllOf.js.map