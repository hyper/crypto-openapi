"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse20013 = void 0;
class InlineResponse20013 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse20013.attributeTypeMap;
    }
}
exports.InlineResponse20013 = InlineResponse20013;
InlineResponse20013.discriminator = undefined;
InlineResponse20013.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<InlineResponse20013Data>",
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
//# sourceMappingURL=InlineResponse20013.js.map