"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentListResponse = void 0;
class PaymentIntentListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentIntentListResponse.attributeTypeMap;
    }
}
exports.PaymentIntentListResponse = PaymentIntentListResponse;
PaymentIntentListResponse.discriminator = undefined;
PaymentIntentListResponse.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": "double"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IPaymentIntent>",
        "format": ""
    }
];
//# sourceMappingURL=PaymentIntentListResponse.js.map