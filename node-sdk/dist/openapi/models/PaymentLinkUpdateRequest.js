"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkUpdateRequest = void 0;
class PaymentLinkUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentLinkUpdateRequest.attributeTypeMap;
    }
}
exports.PaymentLinkUpdateRequest = PaymentLinkUpdateRequest;
PaymentLinkUpdateRequest.discriminator = undefined;
PaymentLinkUpdateRequest.attributeTypeMap = [
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "after_completion",
        "baseName": "after_completion",
        "type": "AfterCompletion",
        "format": ""
    },
    {
        "name": "expires_at",
        "baseName": "expires_at",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=PaymentLinkUpdateRequest.js.map