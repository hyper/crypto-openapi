"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPayoutWallet = void 0;
class IPayoutWallet {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IPayoutWallet.attributeTypeMap;
    }
}
exports.IPayoutWallet = IPayoutWallet;
IPayoutWallet.discriminator = undefined;
IPayoutWallet.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
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
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "PayoutWallet",
        "format": ""
    }
];
//# sourceMappingURL=IPayoutWallet.js.map