"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductBody = void 0;
class UpdateProductBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return UpdateProductBody.attributeTypeMap;
    }
}
exports.UpdateProductBody = UpdateProductBody;
UpdateProductBody.discriminator = undefined;
UpdateProductBody.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "base_currency",
        "baseName": "base_currency",
        "type": "string",
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
//# sourceMappingURL=UpdateProductBody.js.map