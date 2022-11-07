"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountListResponse = void 0;
class AccountListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountListResponse.attributeTypeMap;
    }
}
exports.AccountListResponse = AccountListResponse;
AccountListResponse.discriminator = undefined;
AccountListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IAccount>",
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
//# sourceMappingURL=AccountListResponse.js.map