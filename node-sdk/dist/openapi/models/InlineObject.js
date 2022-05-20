"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject = void 0;
class InlineObject {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }
}
exports.InlineObject = InlineObject;
InlineObject.discriminator = undefined;
InlineObject.attributeTypeMap = [
    {
        "name": "transaction_hash",
        "baseName": "transaction_hash",
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
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=InlineObject.js.map