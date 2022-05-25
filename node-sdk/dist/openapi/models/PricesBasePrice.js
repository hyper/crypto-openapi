"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricesBasePrice = void 0;
class PricesBasePrice {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PricesBasePrice.attributeTypeMap;
    }
}
exports.PricesBasePrice = PricesBasePrice;
PricesBasePrice.discriminator = undefined;
PricesBasePrice.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=PricesBasePrice.js.map