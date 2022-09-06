"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAllOfCustomAmount = void 0;
class PriceAllOfCustomAmount {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PriceAllOfCustomAmount.attributeTypeMap;
    }
}
exports.PriceAllOfCustomAmount = PriceAllOfCustomAmount;
PriceAllOfCustomAmount.discriminator = undefined;
PriceAllOfCustomAmount.attributeTypeMap = [
    {
        "name": "minimum",
        "baseName": "minimum",
        "type": "number",
        "format": ""
    },
    {
        "name": "maximum",
        "baseName": "maximum",
        "type": "number",
        "format": ""
    },
    {
        "name": "_default",
        "baseName": "default",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=PriceAllOfCustomAmount.js.map