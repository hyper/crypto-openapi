"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePayoutWalletBody = void 0;
class CreatePayoutWalletBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreatePayoutWalletBody.attributeTypeMap;
    }
}
exports.CreatePayoutWalletBody = CreatePayoutWalletBody;
CreatePayoutWalletBody.discriminator = undefined;
CreatePayoutWalletBody.attributeTypeMap = [
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
//# sourceMappingURL=CreatePayoutWalletBody.js.map