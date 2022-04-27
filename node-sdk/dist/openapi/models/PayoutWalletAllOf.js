"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutWalletAllOf = void 0;
class PayoutWalletAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PayoutWalletAllOf.attributeTypeMap;
    }
}
exports.PayoutWalletAllOf = PayoutWalletAllOf;
PayoutWalletAllOf.discriminator = undefined;
PayoutWalletAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string",
        "format": ""
    },
    {
        "name": "admin",
        "baseName": "admin",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "PayoutWalletAllOfChainEnum",
        "format": ""
    }
];
//# sourceMappingURL=PayoutWalletAllOf.js.map