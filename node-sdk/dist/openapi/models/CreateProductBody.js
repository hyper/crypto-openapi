"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductBody = void 0;
class CreateProductBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateProductBody.attributeTypeMap;
    }
}
exports.CreateProductBody = CreateProductBody;
CreateProductBody.discriminator = undefined;
CreateProductBody.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "string",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
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
//# sourceMappingURL=CreateProductBody.js.map