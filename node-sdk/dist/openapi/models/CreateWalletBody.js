"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWalletBody = void 0;
class CreateWalletBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateWalletBody.attributeTypeMap;
    }
}
exports.CreateWalletBody = CreateWalletBody;
CreateWalletBody.discriminator = undefined;
CreateWalletBody.attributeTypeMap = [
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
//# sourceMappingURL=CreateWalletBody.js.map