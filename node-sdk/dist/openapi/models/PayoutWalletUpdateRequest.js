"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutWalletUpdateRequest = void 0;
class PayoutWalletUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PayoutWalletUpdateRequest.attributeTypeMap;
    }
}
exports.PayoutWalletUpdateRequest = PayoutWalletUpdateRequest;
PayoutWalletUpdateRequest.discriminator = undefined;
PayoutWalletUpdateRequest.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "string",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "Chain",
        "format": ""
    },
    {
        "name": "_default",
        "baseName": "default",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=PayoutWalletUpdateRequest.js.map