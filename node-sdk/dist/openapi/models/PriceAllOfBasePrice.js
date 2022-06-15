"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAllOfBasePrice = void 0;
class PriceAllOfBasePrice {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PriceAllOfBasePrice.attributeTypeMap;
    }
}
exports.PriceAllOfBasePrice = PriceAllOfBasePrice;
PriceAllOfBasePrice.discriminator = undefined;
PriceAllOfBasePrice.attributeTypeMap = [
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
//# sourceMappingURL=PriceAllOfBasePrice.js.map