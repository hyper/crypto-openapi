"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeeBody = void 0;
class CreateFeeBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateFeeBody.attributeTypeMap;
    }
}
exports.CreateFeeBody = CreateFeeBody;
CreateFeeBody.discriminator = undefined;
CreateFeeBody.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "string",
        "format": ""
    },
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreateFeeBody.js.map