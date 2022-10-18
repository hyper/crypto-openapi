"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListResponse = void 0;
class ProductListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ProductListResponse.attributeTypeMap;
    }
}
exports.ProductListResponse = ProductListResponse;
ProductListResponse.discriminator = undefined;
ProductListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IProduct>",
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
//# sourceMappingURL=ProductListResponse.js.map