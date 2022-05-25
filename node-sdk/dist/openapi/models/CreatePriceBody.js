"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePriceBody = void 0;
class CreatePriceBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreatePriceBody.attributeTypeMap;
    }
}
exports.CreatePriceBody = CreatePriceBody;
CreatePriceBody.discriminator = undefined;
CreatePriceBody.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string",
        "format": ""
    },
    {
        "name": "base_price",
        "baseName": "base_price",
        "type": "PricesBasePrice",
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
        "name": "product",
        "baseName": "product",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreatePriceBody.js.map