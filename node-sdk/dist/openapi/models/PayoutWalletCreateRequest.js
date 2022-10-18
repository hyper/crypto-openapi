"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutWalletCreateRequest = void 0;
class PayoutWalletCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PayoutWalletCreateRequest.attributeTypeMap;
    }
}
exports.PayoutWalletCreateRequest = PayoutWalletCreateRequest;
PayoutWalletCreateRequest.discriminator = undefined;
PayoutWalletCreateRequest.attributeTypeMap = [
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
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "PayoutWallet",
        "format": ""
    }
];
//# sourceMappingURL=PayoutWalletCreateRequest.js.map