"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentUpdateRequest = void 0;
class PaymentIntentUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentIntentUpdateRequest.attributeTypeMap;
    }
}
exports.PaymentIntentUpdateRequest = PaymentIntentUpdateRequest;
PaymentIntentUpdateRequest.discriminator = undefined;
PaymentIntentUpdateRequest.attributeTypeMap = [
    {
        "name": "hash",
        "baseName": "hash",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=PaymentIntentUpdateRequest.js.map