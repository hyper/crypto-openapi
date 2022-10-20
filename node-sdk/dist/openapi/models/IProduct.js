"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProduct = void 0;
class IProduct {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IProduct.attributeTypeMap;
    }
}
exports.IProduct = IProduct;
IProduct.discriminator = undefined;
IProduct.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
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
        "name": "prices",
        "baseName": "prices",
        "type": "Array<IPrice>",
        "format": ""
    }
];
//# sourceMappingURL=IProduct.js.map