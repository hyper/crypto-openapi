"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutWallet = void 0;
class PayoutWallet {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PayoutWallet.attributeTypeMap;
    }
}
exports.PayoutWallet = PayoutWallet;
PayoutWallet.discriminator = undefined;
PayoutWallet.attributeTypeMap = [
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
        "type": "PayoutWalletChainEnum",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=PayoutWallet.js.map