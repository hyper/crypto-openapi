"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPayoutWalletsResponse = void 0;
class ListPayoutWalletsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListPayoutWalletsResponse.attributeTypeMap;
    }
}
exports.ListPayoutWalletsResponse = ListPayoutWalletsResponse;
ListPayoutWalletsResponse.discriminator = undefined;
ListPayoutWalletsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<PayoutWallet>",
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
        "format": ""
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=ListPayoutWalletsResponse.js.map