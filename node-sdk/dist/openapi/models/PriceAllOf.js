"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAllOf = void 0;
class PriceAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PriceAllOf.attributeTypeMap;
    }
}
exports.PriceAllOf = PriceAllOf;
PriceAllOf.discriminator = undefined;
PriceAllOf.attributeTypeMap = [
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
        "name": "base_price",
        "baseName": "base_price",
        "type": "PriceAllOfBasePrice",
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
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "string | Product",
        "format": ""
    }
];
//# sourceMappingURL=PriceAllOf.js.map