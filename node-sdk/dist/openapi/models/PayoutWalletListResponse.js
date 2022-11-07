"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutWalletListResponse = void 0;
class PayoutWalletListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PayoutWalletListResponse.attributeTypeMap;
    }
}
exports.PayoutWalletListResponse = PayoutWalletListResponse;
PayoutWalletListResponse.discriminator = undefined;
PayoutWalletListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IPayoutWallet>",
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
//# sourceMappingURL=PayoutWalletListResponse.js.map