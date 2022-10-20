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
        "name": "type",
        "baseName": "type",
        "type": "PayoutWallet",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "Chain",
        "format": ""
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string",
        "format": ""
    },
    {
        "name": "_default",
        "baseName": "default",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=PayoutWalletCreateRequest.js.map