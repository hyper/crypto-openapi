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
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=ProductUpdateRequest.js.map