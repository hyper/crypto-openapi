"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IWallet = void 0;
class IWallet {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IWallet.attributeTypeMap;
    }
}
exports.IWallet = IWallet;
IWallet.discriminator = undefined;
IWallet.attributeTypeMap = [
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
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=IWallet.js.map