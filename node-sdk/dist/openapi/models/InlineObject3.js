"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject3 = void 0;
class InlineObject3 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineObject3.attributeTypeMap;
    }
}
exports.InlineObject3 = InlineObject3;
InlineObject3.discriminator = undefined;
InlineObject3.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<PayoutWallet>",
        "format": ""
    },
    {
        "name": "hasMore",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": ""
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=InlineObject3.js.map