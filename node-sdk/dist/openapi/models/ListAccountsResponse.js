"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAccountsResponse = void 0;
class ListAccountsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListAccountsResponse.attributeTypeMap;
    }
}
exports.ListAccountsResponse = ListAccountsResponse;
ListAccountsResponse.discriminator = undefined;
ListAccountsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<Account>",
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
//# sourceMappingURL=ListAccountsResponse.js.map