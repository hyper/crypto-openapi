"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsResponse = void 0;
class ListProductsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListProductsResponse.attributeTypeMap;
    }
}
exports.ListProductsResponse = ListProductsResponse;
ListProductsResponse.discriminator = undefined;
ListProductsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<Product>",
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
//# sourceMappingURL=ListProductsResponse.js.map