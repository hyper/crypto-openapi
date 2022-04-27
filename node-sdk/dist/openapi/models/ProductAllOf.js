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
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "baseCurrency",
        "baseName": "base_currency",
        "type": "string",
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
        "type": "ProductAllOfCurrencyEnum",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ProductAllOf.js.map