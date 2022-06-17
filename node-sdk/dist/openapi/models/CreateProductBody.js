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
    }
];
//# sourceMappingURL=CreateProductBody.js.map