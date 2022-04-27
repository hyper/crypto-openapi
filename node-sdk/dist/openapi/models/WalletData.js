"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletData = void 0;
class WalletData {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WalletData.attributeTypeMap;
    }
}
exports.WalletData = WalletData;
WalletData.discriminator = undefined;
WalletData.attributeTypeMap = [
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
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=WalletData.js.map