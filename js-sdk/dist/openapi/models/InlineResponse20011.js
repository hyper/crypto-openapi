"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse20011 = void 0;
class InlineResponse20011 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse20011.attributeTypeMap;
    }
}
exports.InlineResponse20011 = InlineResponse20011;
InlineResponse20011.discriminator = undefined;
InlineResponse20011.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<InlineResponse20011Data>",
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
//# sourceMappingURL=InlineResponse20011.js.map