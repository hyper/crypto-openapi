"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateRequest = void 0;
class ProductUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ProductUpdateRequest.attributeTypeMap;
    }
}
exports.ProductUpdateRequest = ProductUpdateRequest;
ProductUpdateRequest.discriminator = undefined;
ProductUpdateRequest.attributeTypeMap = [
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=ProductUpdateRequest.js.map