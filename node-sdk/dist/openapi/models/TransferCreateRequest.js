"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferCreateRequest = void 0;
class TransferCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TransferCreateRequest.attributeTypeMap;
    }
}
exports.TransferCreateRequest = TransferCreateRequest;
TransferCreateRequest.discriminator = undefined;
TransferCreateRequest.attributeTypeMap = [
    {
        "name": "payment_intent",
        "baseName": "payment_intent",
        "type": "string",
        "format": ""
    },
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=TransferCreateRequest.js.map