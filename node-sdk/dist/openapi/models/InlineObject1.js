"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject1 = void 0;
class InlineObject1 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineObject1.attributeTypeMap;
    }
}
exports.InlineObject1 = InlineObject1;
InlineObject1.discriminator = undefined;
InlineObject1.attributeTypeMap = [
    {
        "name": "pause_collection",
        "baseName": "pause_collection",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "cancel_at",
        "baseName": "cancel_at",
        "type": "number",
        "format": ""
    },
    {
        "name": "canceled_at",
        "baseName": "canceled_at",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=InlineObject1.js.map