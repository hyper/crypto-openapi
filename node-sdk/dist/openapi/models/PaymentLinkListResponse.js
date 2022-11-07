"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkListResponse = void 0;
class PaymentLinkListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentLinkListResponse.attributeTypeMap;
    }
}
exports.PaymentLinkListResponse = PaymentLinkListResponse;
PaymentLinkListResponse.discriminator = undefined;
PaymentLinkListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IPaymentLink>",
        "format": ""
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
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=PaymentLinkListResponse.js.map