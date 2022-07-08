"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentAllOfLineItems = void 0;
class PaymentIntentAllOfLineItems {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentIntentAllOfLineItems.attributeTypeMap;
    }
}
exports.PaymentIntentAllOfLineItems = PaymentIntentAllOfLineItems;
PaymentIntentAllOfLineItems.discriminator = undefined;
PaymentIntentAllOfLineItems.attributeTypeMap = [
    {
        "name": "price",
        "baseName": "price",
        "type": "any | Price",
        "format": ""
    },
    {
        "name": "price_data",
        "baseName": "price_data",
        "type": "any",
        "format": ""
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=PaymentIntentAllOfLineItems.js.map