"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletListResponse = void 0;
class WalletListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WalletListResponse.attributeTypeMap;
    }
}
exports.WalletListResponse = WalletListResponse;
WalletListResponse.discriminator = undefined;
WalletListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IWallet>",
        "format": ""
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": "double"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=WalletListResponse.js.map