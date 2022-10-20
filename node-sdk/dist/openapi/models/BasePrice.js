"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePrice = void 0;
class BasePrice {
    constructor() {
    }
    static getAttributeTypeMap() {
        return BasePrice.attributeTypeMap;
    }
}
exports.BasePrice = BasePrice;
BasePrice.discriminator = undefined;
BasePrice.attributeTypeMap = [
    {
        "name": "custom_amount",
        "baseName": "custom_amount",
        "type": "CustomAmount",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": "double"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=BasePrice.js.map