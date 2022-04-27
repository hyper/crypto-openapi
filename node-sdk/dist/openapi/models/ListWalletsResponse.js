"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWalletsResponse = void 0;
class ListWalletsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListWalletsResponse.attributeTypeMap;
    }
}
exports.ListWalletsResponse = ListWalletsResponse;
ListWalletsResponse.discriminator = undefined;
ListWalletsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<Wallet>",
        "format": ""
    },
    {
        "name": "hasMore",
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
//# sourceMappingURL=ListWalletsResponse.js.map