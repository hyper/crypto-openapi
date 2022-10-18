"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateRequest = void 0;
class ProductCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ProductCreateRequest.attributeTypeMap;
    }
}
exports.ProductCreateRequest = ProductCreateRequest;
ProductCreateRequest.discriminator = undefined;
ProductCreateRequest.attributeTypeMap = [
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
//# sourceMappingURL=ProductCreateRequest.js.map