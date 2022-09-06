"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletAllOf = void 0;
class WalletAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WalletAllOf.attributeTypeMap;
    }
}
exports.WalletAllOf = WalletAllOf;
WalletAllOf.discriminator = undefined;
WalletAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "WalletAllOfChainEnum",
        "format": ""
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string | Customer",
        "format": ""
    }
];
//# sourceMappingURL=WalletAllOf.js.map