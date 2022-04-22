"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse20019 = void 0;
class InlineResponse20019 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse20019.attributeTypeMap;
    }
}
exports.InlineResponse20019 = InlineResponse20019;
InlineResponse20019.discriminator = undefined;
InlineResponse20019.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<InlineResponse20019Data>",
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
//# sourceMappingURL=InlineResponse20019.js.map