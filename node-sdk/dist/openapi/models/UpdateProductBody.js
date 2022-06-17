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
//# sourceMappingURL=UpdateProductBody.js.map