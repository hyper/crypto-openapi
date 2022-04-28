"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutWalletData = void 0;
class PayoutWalletData {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PayoutWalletData.attributeTypeMap;
    }
}
exports.PayoutWalletData = PayoutWalletData;
PayoutWalletData.discriminator = undefined;
PayoutWalletData.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=PayoutWalletData.js.map